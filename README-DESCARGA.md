# Cronograma de Capacitación - Universidad de Córdoba

## Descripción
Aplicación web interactiva para visualizar el cronograma de capacitación de la Universidad de Córdoba, organizado por facultades con acceso directo a sesiones de Zoom.

## Características
- ✅ Panel lateral interactivo con todas las facultades
- ✅ Vista de cronograma organizada por días (lunes a viernes)
- ✅ Detalles completos de cada sesión con tema, horario y enlace a Zoom
- ✅ Diseño responsivo y profesional
- ✅ Identidad visual de Unicórdoba (logos en encabezado y footer)
- ✅ Información de CINTIA (Centro de Innovación en TIC)

## Requisitos previos
- Node.js 18+ 
- npm o pnpm

## Instalación

### 1. Descomprimir los archivos
```bash
# Si descargaste el archivo .zip
unzip cronograma-capacitacion-unicordoba-clean.zip
cd cronograma-capacitacion-unicordoba

# O si descargaste el archivo .tar.gz
tar -xzf cronograma-capacitacion-unicordoba-clean.tar.gz
cd cronograma-capacitacion-unicordoba
```

### 2. Instalar dependencias
```bash
pnpm install
# O con npm
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
pnpm dev
# O con npm
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Estructura del proyecto

```
cronograma-capacitacion-unicordoba/
├── client/                          # Frontend React
│   ├── public/                      # Assets estáticos
│   │   ├── logo-unicordoba.png     # Logo de Unicórdoba
│   │   └── logo-cintia.png         # Logo de CINTIA
│   └── src/
│       ├── pages/
│       │   └── Home.tsx            # Página principal del cronograma
│       ├── components/             # Componentes reutilizables
│       ├── App.tsx                 # Componente raíz
│       └── index.css               # Estilos globales
├── server/                          # Backend (placeholder)
├── package.json                     # Dependencias
└── README.md                        # Documentación
```

## Personalización

### Cambiar temas de capacitación
Edita el archivo `client/src/pages/Home.tsx` y modifica el array `SCHEDULE_DATA`:

```typescript
const SCHEDULE_DATA = [
  {
    id: "agronomia",
    name: "Ciencias Agrícolas",
    icon: "🌾",
    day: "Lunes",
    date: "23/02/2026",
    topic: "Tu tema aquí",
    time: "09:00 AM - 10:00 AM",
    zoomLink: "https://zoom.us/j/tu-enlace",
  },
  // ... más facultades
];
```

### Cambiar colores
Edita `client/src/index.css` y modifica las variables CSS:

```css
:root {
  --primary: #1B7D3D; /* Color verde de Unicórdoba */
  --primary-foreground: #FFFFFF;
  /* ... más variables */
}
```

### Cambiar tipografía
Edita `client/index.html` y reemplaza las fuentes de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap" rel="stylesheet" />
```

## Compilar para producción

```bash
pnpm build
# O con npm
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## Despliegue

### Opción 1: Manus (Recomendado)
La aplicación fue creada en Manus y puede ser publicada directamente desde la plataforma.

### Opción 2: Vercel
```bash
npm install -g vercel
vercel
```

### Opción 3: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opción 4: Servidor propio
```bash
pnpm build
pnpm start
```

## Tecnologías utilizadas
- **React 19** - Framework de UI
- **Tailwind CSS 4** - Estilos
- **shadcn/ui** - Componentes de UI
- **Wouter** - Enrutamiento
- **Vite** - Bundler
- **TypeScript** - Tipado estático

## Licencia
© 2026 Universidad de Córdoba

## Soporte
Para preguntas o problemas, contacta a CINTIA (Centro de Innovación en TIC para Apoyo a la Academia)

---
**Última actualización:** Febrero 19, 2026
