FROM node:18-alpine AS base

# Instalar dependencias 
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependencias según el administrador de paquetes preferido
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Ejecutar en modo desarrollo
FROM base AS development

ENV NODE_ENV DEVELOPMENT

# Next.js recopila datos de telemetría completamente anónimos sobre el uso general.
# Obtenga más información aquí: https://nextjs.org/telemetry
# Descomente la siguiente línea en caso de que desee deshabilitar la telemetría durante la compilación.
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

CMD ["npm", "run", "dev"]

# Generar los estáticos a partir del código fuente
FROM base AS builder

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Corre los estáticos en una imagen de node. (Menos eficiente que un nginx)
FROM base AS runner

ENV NODE_ENV PRODUCTION_HALF
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Se establece el propietario para la caché de pre-renderización
#RUN mkdir .next
#RUN chown nextjs:nodejs .next

# Aprovechar automáticamente los rastros de salida para reducir el tamaño de la imagen
# https://nextjs.org/docs/advanced-features/output-file-tracing
#COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./.next/standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/ ./.next/

USER nextjs

EXPOSE 3000
ENV PORT 3000

# server.js se crea mediante la siguiente compilación a partir de la salida independiente
# https://nextjs.org/docs/pages/api-reference/next-config-js/output

CMD HOSTNAME="0.0.0.0" node server.js


# Corre los estáticos en un Nginx. (Más eficiente)
FROM nginx:alpine as production

ENV ENTORNO PRODUCTION

# Se configura zona horaria
RUN apk add --no-cache tzdata
ENV TZ=America/Argentina/Buenos_Aires
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=builder --chown=nginx /app/public /usr/share/nginx/html/public
COPY devops/conf/default.conf /etc/nginx/conf.d/default.conf

USER nginx

