---
name: Criollo Heritage
colors:
  surface: "#f9f9f9"
  surface-dim: "#dadada"
  surface-bright: "#f9f9f9"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f4"
  surface-container: "#eeeeee"
  surface-container-high: "#e8e8e8"
  surface-container-highest: "#e2e2e2"
  on-surface: "#1a1c1c"
  on-surface-variant: "#5e3f3b"
  inverse-surface: "#2f3131"
  inverse-on-surface: "#f0f1f1"
  outline: "#936e69"
  outline-variant: "#e9bcb6"
  surface-tint: "#c0000c"
  primary: "#b5000b"
  on-primary: "#ffffff"
  primary-container: "#e30613"
  on-primary-container: "#fff5f3"
  inverse-primary: "#ffb4aa"
  secondary: "#7a582f"
  on-secondary: "#ffffff"
  secondary-container: "#fecf9c"
  on-secondary-container: "#79572e"
  tertiary: "#595959"
  on-tertiary: "#ffffff"
  tertiary-container: "#717171"
  on-tertiary-container: "#f7f7f7"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffdad5"
  primary-fixed-dim: "#ffb4aa"
  on-primary-fixed: "#410001"
  on-primary-fixed-variant: "#930007"
  secondary-fixed: "#ffddb9"
  secondary-fixed-dim: "#ecbe8d"
  on-secondary-fixed: "#2b1700"
  on-secondary-fixed-variant: "#5f401a"
  tertiary-fixed: "#e2e2e2"
  tertiary-fixed-dim: "#c6c6c6"
  on-tertiary-fixed: "#1b1b1b"
  on-tertiary-fixed-variant: "#474747"
  background: "#f9f9f9"
  on-background: "#1a1c1c"
  surface-variant: "#e2e2e2"
  lucha-red: "#E30613"
  artisan-gold: "#C69C6D"
  charcoal: "#1A1A1A"
typography:
  display-lg:
    fontFamily: anybody
    fontSize: 48px
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: anybody
    fontSize: 36px
    fontWeight: "800"
    lineHeight: "1.1"
  headline-lg:
    fontFamily: anybody
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: anybody
    fontSize: 24px
    fontWeight: "700"
    lineHeight: "1.2"
  body-lg:
    fontFamily: workSans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: workSans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
  label-caps:
    fontFamily: spaceMono
    fontSize: 14px
    fontWeight: "700"
    lineHeight: "1.2"
  price-display:
    fontFamily: anybody
    fontSize: 20px
    fontWeight: "800"
    lineHeight: "1.2"
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Brand & Style

This design system captures the vibrant, soulful energy of a traditional Peruvian _sanguchería_. The brand personality is artisanal, nostalgic, and high-energy—evoking the bustling atmosphere of Lima's streets. It targets a diverse audience seeking authentic flavors and a connection to culinary heritage.

The visual style is a sophisticated blend of **High-Contrast/Bold** and **Retro/Vintage**. It avoids the sterility of modern minimalism in favor of raw, hand-painted aesthetics, chalkboard-inspired textures, and heavy-weighted elements. The interface should feel like a physical menu in a well-loved local eatery: tactile, immediate, and brimming with character.

## Colors

The palette is rooted in the colors of the Peruvian flag and the natural textures of traditional materials.

- **Primary Red:** A high-saturation, energetic red used for calls to action, brand marks, and key highlights. It represents passion and heat.
- **Secondary Gold:** A muted, earthy ochre that suggests wood, paper, and artisanal craftsmanship. It is used for borders, icons, and background accents to soften the high contrast.
- **Tertiary Black:** Used for heavy typography and structured elements to provide a "chalkboard" grounding.
- **Neutral White:** A crisp canvas that allows the bold colors and photography to pop. In many contexts, a very light parchment tint may be substituted for pure white to enhance the vintage feel.

## Typography

The typography strategy replicates the hand-lettered signage and vintage woodblock prints typical of traditional Peruvian branding.

- **Headlines:** `Anybody` is used for its variable weight and aggressive, bold presence. It mimics the impact of "True North" from the reference material. Use heavy weights (700+) for item names and section titles.
- **Body:** `Work Sans` provides a clean, highly legible counterpoint to the expressive headlines, ensuring that ingredient lists and descriptions are easy to scan.
- **Labels & Meta:** `Space Mono` is used sparingly for prices, SKU codes, or technical details, nodding to the industrial/market-stall aesthetic of utilitarian labels.

Avoid standard sentence case for major headers; use uppercase or title case to maintain the "shouted" energy of a street vendor.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop, centered to create the feel of a printed menu page. On mobile, it transitions to a fluid, single-column stack.

- **Grid:** Use a 12-column grid for desktop with generous 24px gutters to allow for "breathable" high-contrast elements.
- **Rhythm:** Spacing should be tight within components (e.g., price close to item name) but generous between sections to prevent the bold typography from becoming overwhelming.
- **Asymmetry:** Occasionally break the grid with overlapping images or tilted price badges to reinforce the "handmade" look.

## Elevation & Depth

This design system eschews modern soft shadows in favor of **Tonal Layers** and **Bold Borders**.

- **Flat Surfaces:** Use high-contrast color blocks to separate content areas. A red header block meeting a white body section creates immediate hierarchy without needing depth.
- **Hard Shadows:** Where depth is required (e.g., for "floating" cart buttons), use 100% opacity hard-drop shadows in Black or Primary Red, offset by 4px or 8px. Do not use blurs.
- **Texture Overlays:** Use subtle grain or paper-texture overlays on background containers to reduce digital "slickness" and add a tactile, rustic quality.

## Shapes

The shape language is primarily **Sharp (0)**. Square corners and straight lines reflect wood-cut blocks and traditional architecture.

- **Stamps:** Rectangular containers with thick (2pt - 4pt) black or red borders should be used for callouts and price badges.
- **Dividers:** Use heavy horizontal rules or "zigzag" borders to separate menu categories, mimicking the decorative trim of traditional Peruvian carts.
- **Exceptions:** Circular elements are reserved exclusively for "New" or "Discount" badges, acting as a visual disruptor to the otherwise orthogonal layout.

## Components

- **Buttons:** Large, rectangular, and filled with Primary Red or Black. Use uppercase bold typography. Implement a "pressed" state that shifts the element 2px down and right rather than changing the color.
- **Chips/Badges:** Use the Secondary Gold with black text for dietary tags (e.g., "Picante"). Use a simple black border.
- **Input Fields:** Thick black bottom-borders only, resembling a handwritten order form. Use `Space Mono` for placeholder text.
- **Cards (Menu Items):** A simple vertical stack. Image on top, followed by a bold `headline-md` item name, a `body-md` description, and a `price-display` at the bottom right.
- **Checkboxes:** Square boxes with a heavy "X" mark instead of a checkmark to maintain the rustic, manual feel.
- **Lists:** Use bullet points shaped like small diamonds or squares in Primary Red.
