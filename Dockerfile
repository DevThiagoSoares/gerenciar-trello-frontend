# Estágio de construção
FROM node:latest as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm install --no-cache

# Estágio de produção
FROM nginx:latest

COPY nginx/nginx.conf /nginx/nginx.conf

COPY --from=builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
