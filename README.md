# OptimaTI

**OptimaTI** es un sistema interactivo y didáctico desarrollado en **Astro** y **Tailwind CSS** (v4) diseñado para simular y ejecutar diagnósticos de la Gestión Técnica en la Operación de Servicios TI. 

## Características Principales
* **Diagnóstico Interactivo (Wizard):** Simulador basado en el Arquetipo Sistémico de Causa y Efecto.
* **Diagrama de Ishikawa Animado:** Construido 100% en SVG y HTML para máxima resolución.
* **Persistencia Local:** Historial de tickets e incidentes gestionados y guardados en el `localStorage`.
* **Exportación a PNG:** Generación de tickets e informes de diagnóstico en alta calidad (via `html-to-image`).
* **Estética Moderna:** UI/UX corporativa utilizando *Glassmorphism* y una paleta de colores inmersiva.

## Estructura del Proyecto
* `src/pages/index.astro` - Wizard principal de diagnóstico.
* `src/pages/dashboard.astro` - Panel de control y gestor de casos de estudio.
* `src/components/IshikawaDiagram.astro` - Gráfico dinámico del diagrama de causa y efecto.
* `src/scripts/store.js` - Gestión del estado y base de datos local.

## Instalación y Ejecución Local
1. Clona el repositorio.
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
