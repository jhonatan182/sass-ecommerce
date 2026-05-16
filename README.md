# Descripción del Proyecto

## Correr en dev

1. Clonar el repositorio
2. Crear una copia del archivo `.env.example` y renombrarlo a `.env`
3. Configurar las variables de entorno necesarias
4. Instalar las dependencias con `bun install`
5. Ejecutar las migraciones de Prisma `bunx prisma migrete dev`
6. Ejecutar el seed de datos `bun run seed`
7. Ejecutar `bun run dev`

## Correr en prod
