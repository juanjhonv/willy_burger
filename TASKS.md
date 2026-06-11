# TASKS.md — Plan de Implementación

## Decisiones tomadas

- **Package manager**: pnpm
- **Fuentes**: Google Fonts vía `@fontsource`
- **Imágenes placeholder**: picsum.photos
- **Texture overlays / zigzag**: Omite — usar `border-4 border-dashed` en colores del brand
- **Hard shadows**: CSS custom (`box-shadow: 4px 4px 0 0 #1A1A1A`)
- **Checkboxes**: Omitir — no hay formularios en el alcance

---

## Tareas

### Tarea 1: Scaffold del proyecto ✓
- [x] Ejecutar `pnpm create astro@latest . --template minimal --typescript strict`
- [x] Ejecutar `pnpm astro add tailwind`
- [x] Eliminar boilerplate innecesario
- [x] Verificar `pnpm run build` funciona

### Tarea 2: Configurar Tailwind y fuentes ✓
- [x] Configurar colores custom en `global.css` (`@theme`):
  - `lucha-red: #E30613`
  - `artisan-gold: #C69C6D`
  - `charcoal: #1A1A1A`
- [x] Extender spacing: `unit: 8px`
- [x] Instalar `@fontsource/anybody`, `@fontsource/work-sans`, `@fontsource/space-mono`
- [x] Importar fuentes en `global.css`
- [x] Agregar utilidades CSS: `.hard-shadow`, `.hard-shadow-red`, `.title-case`

### Tarea 3: Crear `src/data/menu.json` ✓
- [x] 4 categorías: Entradas, Burgers, Parrillas, Bebidas
- [x] 2–3 platillos por categoría con `adicionales`
- [x] Imágenes: `https://picsum.photos/seed/<slug>/400/300`
- [x] JSON válido verificado

### Tarea 4: Crear `src/types/menu.ts` ✓
- [x] Interfaces: `Adicional`, `Platillo`, `Categoria`, `MenuData`
- [x] Tipado fuerte consistente con `menu.json`
- [x] Type check sin errores

### Tarea 5: Crear `src/layouts/Layout.astro` ✓
- [x] Meta tags base (viewport, charset, description, SEO)
- [x] Importación de `global.css` para Tailwind y fuentes
- [x] Header: "WILLY BURGER" con fondo rojo y borde charcoal
- [x] Footer: copyright con fondo charcoal
- [x] Slot para contenido dinámico
- [x] Props: `title` y `description` opcionales

### Tarea 6: Crear `src/components/CardCategoria.astro` ✓
- [x] Props tipadas con `Categoria`
- [x] Imagen con lazy loading y hover scale
- [x] Nombre (font-display, title-case) + descripción
- [x] Enlace a `/categoria/[slug]`
- [x] Borde 4px charcoal + sombra dura CSS custom
- [x] Hover: translate + shadow-none (efecto "pressed")

### Tarea 7: Crear `src/pages/index.astro` ✓
- [x] Importar `menu.json` y tipos
- [x] Layout con título "Nuestro Menú"
- [x] Grid responsive: 1-col mobile → 2-col md → 4-col lg

### Tarea 8: Crear `src/components/CardPlatillo.astro` ✓
- [x] Props tipadas con `Platillo`
- [x] Título (font-display, title-case) + descripción
- [x] Precio con `font-mono` (`S/ 00.00`)
- [x] Sección de adicionales con chips dorados
- [x] Imagen responsive con borde charcoal
- [x] Layout flexible: columna en mobile, fila en desktop

### Tarea 9: Crear `src/pages/categoria/[slug].astro` ✓
- [x] `getStaticPaths()` genera 4 rutas desde `menu.json`
- [x] Obtener categoría por slug, filtrar platillos por `categoriaSlug`
- [x] Título de categoría (font-display, title-case)
- [x] Grid responsive de `CardPlatillo` (1-col mobile → 2-col lg)
- [x] Botón "← Volver al menú" con fuente mono
- [x] 5 páginas generadas en build: `/`, `/categoria/{entradas,burgers,parrillas,bebidas}`

### Tarea 10: Build + verificación ✓
- [x] `pnpm run build` sin errores (5 páginas)
- [x] Rutas generadas: `/`, `/categoria/{entradas,burgers,parrillas,bebidas}`
- [x] SEO meta tags presentes en todas las páginas (title, viewport, description, charset)
- [x] `pnpm run preview` funciona correctamente en localhost:4322
