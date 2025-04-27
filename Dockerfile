# ==== Этап 1: Сборка приложения ====
# Используем официальный образ Node.js. Выберите нужную вам LTS-версию.
# Даем этому этапу имя 'builder', чтобы ссылаться на него позже.
FROM node:18-alpine as builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
# Копируем их отдельно, чтобы воспользоваться кэшированием Docker.
# Если эти файлы не изменились, Docker переиспользует слой с установленными зависимостями.
COPY package.json package-lock.json* ./
# Если используете yarn:
# COPY package.json yarn.lock ./

# Устанавливаем зависимости
# 'npm ci' рекомендуется для CI/CD, так как он устанавливает строго по lock-файлу
RUN npm ci
# Если используете yarn:
# RUN yarn install --frozen-lockfile

# Копируем остальные файлы приложения
COPY . .

# Собираем приложение для продакшена
# Команда сборки может отличаться в вашем проекте (например, 'build:prod')
RUN npm run build

# ==== Этап 2: Сервировка приложения через Nginx ====
# Используем официальный легковесный образ Nginx на Alpine
FROM nginx:stable-alpine

# Копируем кастомный конфиг Nginx (объяснение ниже)
# Этот шаг важен для корректной работы React Router (SPA - Single Page Application)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем статичные файлы сборки из предыдущего этапа ('builder')
# Путь к сборке (/app/build) может отличаться в зависимости от конфигурации вашего React-проекта (иногда это 'dist')
# Путь назначения (/usr/share/nginx/html) - это стандартный каталог для статики в Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Открываем порт 80, на котором Nginx слушает по умолчанию
EXPOSE 80

# Команда для запуска Nginx в режиме "foreground" (необходим для Docker)
CMD ["nginx", "-g", "daemon off;"]