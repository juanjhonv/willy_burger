# PRD - Menú Digital de Restaurante

## 1. Visión del Producto

Crear un sitio web **informativo y responsivo** para mostrar el menú de un restaurante. El objetivo es ofrecer una experiencia agradable tanto en desktop como en móvil, permitiendo al cliente navegar fácilmente por categorías y ver los detalles de cada platillo.

## 2. Objetivos

- Mostrar las categorías de platos de forma atractiva en la página principal.
- Permitir navegar a una página específica por categoría.
- Mostrar información clara de cada platillo (título, descripción y precio).
- Incluir sección de "Adicionales" con sus precios respectivos.
- Consumir toda la información desde un archivo JSON (sin backend).
- Stack técnico: **Astro + Tailwind CSS + TypeScript**.

## 3. Requisitos Funcionales

### Página Principal (`/`)

- Mostrar todas las categorías disponibles en un grid responsivo.
- Cada categoría debe ser clickable y navegar a su página correspondiente (`/categoria/[slug]`).
- Diseño visual atractivo (cards con imagen representativa recomendada).

### Página de Categoría (`/categoria/[slug]`)

- Mostrar el nombre de la categoría seleccionada como título.
- Listado de todos los platillos pertenecientes a esa categoría.
- Cada platillo debe mostrar:
  - Título
  - Descripción
  - Precio en soles (formato: S/ 00.00)
- Sección de **Adicionales** clara y visible (puede estar por platillo o al final de la página).
- Botón o enlace para volver a la página principal.

### Navegación General

- Header con logo y nombre del restaurante.
- Footer simple (información de contacto, redes sociales, etc. es opcional).

## 4. Estructura de Datos (JSON)

Se debe crear el archivo: `src/data/menu.json`

```json
{
  "categorias": [
    {
      "id": 1,
      "slug": "entradas",
      "nombre": "Entradas",
      "descripcion": "Para comenzar",
      "imagen": "/images/categorias/entradas.jpg"
    }
  ],
  "platillos": [
    {
      "id": 101,
      "categoriaSlug": "entradas",
      "titulo": "Ceviche Clásico",
      "descripcion": "Pescado fresco, cebolla roja, ají, cilantro y camote.",
      "precio": 28.9,
      "adicionales": [
        { "nombre": "Extra langostinos", "precio": 12.0 },
        { "nombre": "Extra choclo", "precio": 5.0 }
      ]
    }
  ]
}
```

## 5. Requisitos Técnicos

- **Framework**: Astro (última versión estable)
- **Estilos**: Tailwind CSS
- **Lenguaje**: TypeScript (fuertemente tipado)
- **Datos**: Importar directamente el `menu.json`
- **Rutas**:
  - Página principal: `src/pages/index.astro`
  - Página dinámica: `src/pages/categoria/[slug].astro`
- **Imágenes**: Usar Astro Assets para optimización, en caso de no existir el recurso usa imágenes placeholder
- **Fonts**: Obtener las fuentes de GoogleFonts via Astro, en caso de no encontrarla reemplazarla por una parecida
- **SEO**: Meta tags apropiados en cada página
- **Performance**: Mantener el sitio 100% estático
- **NodePackageManager**: Usar pnpm, no instalar nunca paquetes de forma global

## 6. Diseño y UX/UI

- Diseño moderno, limpio y apetitoso.
- Totalmente **mobile-first** y responsivo.
- Buena tipografía y espaciado.
- Transiciones suaves y efectos hover.
- Colores cálidos recomendados (rojos, naranjas, marrones, etc.).

## 7. Criterios de Aceptación

- La página principal muestra correctamente todas las categorías.
- La navegación entre páginas funciona sin errores.
- Todos los platillos se muestran con título, descripción y precio.
- Los adicionales se visualizan correctamente con su precio.
- El sitio es totalmente responsivo en móviles y desktop.
- Toda la información proviene del archivo `menu.json`.
- Código limpio, bien organizado y tipado.

## 8. Archivos Principales

- `src/data/menu.json`
- `src/pages/index.astro`
- `src/pages/categoria/[slug].astro`
- `src/components/CardCategoria.astro`
- `src/components/CardPlatillo.astro`
- `src/layouts/Layout.astro`
- `src/types/menu.ts` (recomendado para tipado)

## 9. Fuera de Alcance

- Carrito de compras
- Sistema de reservas
- Backend o base de datos
- Autenticación
- Panel de administración
- Pagos en línea
