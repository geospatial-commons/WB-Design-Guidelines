# World Bank Design Guidelines

A single source of truth for front-end development and data visualization across World Bank dashboards and data products.

## Quick Links

| Section | Description |
|---------|-------------|
| [Design Guide](design-guide/) | Colors, typography, layout, and component patterns |
| [Data Visualization](data-viz/) | Chart palettes and visualization standards |
| [Icons](icons/) | WB logos, OCHA humanitarian icons, and scorecard icons |
| [References](references/) | Official WB guideline PDFs and extracted references |

---

## Quick Reference

### Core Dashboard Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `wb-blue` | `#009FDA` | Links, active states, accents |
| `wb-navy` | `#002244` | Sidebar, headers, feature cards |
| `wb-teal` | `#00A996` | Positive indicators |
| `wb-gray-900` | `#111827` | Body text |
| `wb-gray-500` | `#6B7280` | Secondary text, labels |
| `wb-gray-50` | `#F7F8FA` | App shell background |

### Typography

**Primary font:** Open Sans — via [Google Fonts](https://fonts.google.com/specimen/Open+Sans) or `next/font/google`

Weights used: 400 (body), 600 (labels, emphasis), 700 (headings, KPI values)

### WB Vertical Brand Colors (quick reference)

| Vertical | Base Hex |
|----------|----------|
| People | `#F7B841` |
| Prosperity | `#872C8F` |
| Planet | `#07AB50` |
| Planet / Marine | `#009CA7` |
| Infrastructure | `#91302F` |
| Digital | `#5D6472` |
| Corporate / KM | `#004972` |

Full tint tables (10%–100%) in [`design-guide/colors.md`](design-guide/colors.md).

---

## Usage

This is a reference repository — not an installable package. Browse the docs on GitHub, or clone locally for quick access to icons and color tokens.

For programmatic use, import the JSON token files:

```json
// design-guide/colors.json — brand and UI colors
// data-viz/palettes.json  — chart and map palettes
```

---

## Status

| Section | Status |
|---------|--------|
| Design Guide — Colors | Done |
| Design Guide — Typography | Done |
| Design Guide — Layout & Spacing | Done |
| Design Guide — Components | Done |
| Data Viz — Palettes | Done (UK Gov Analysis Function) |
| Data Viz — Chart Guidelines | **TODO** |
| Icons | Done |

---

## Contributing

Edit the relevant Markdown file in each section. For color and palette additions, update both the `.md` and `.json` files to keep them in sync. Add official reference PDFs to `references/` and list them in the index.
