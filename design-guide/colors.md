# Colors

WB color system for digital dashboards and data products. Sourced from the [WBG Digital Look & Feel Style Guide](../references/WBG-Digital-Look-StyleguideV2.pdf) and adapted for front-end development.

---

## Core Dashboard Palette

The practical color set for building WB dashboards. These are the primary tokens to use in UI components.

| Token | Hex | Usage |
|-------|-----|-------|
| `wb-blue` | `#009FDA` | Primary action, links, active states, chart lines, left-border accents |
| `wb-navy` | `#002244` | Sidebar, page headers, "feature" KPI cards, section anchors |
| `wb-teal` | `#00A996` | Positive indicators, success states, secondary accent |
| `wb-white` | `#FFFFFF` | Page background, card backgrounds |
| `wb-gray-50` | `#F7F8FA` | App shell background |
| `wb-gray-100` | `#EEF0F3` | Dividers, table zebra rows |
| `wb-gray-500` | `#6B7280` | Secondary text, labels, metadata |
| `wb-gray-900` | `#111827` | Primary body text |

### Status / RAG Colors

Standard colors for risk indicators (Red-Amber-Green). These are universal alerting standards — do not modify.

| Token | Hex | Usage |
|-------|-----|-------|
| `rag-red` | `#C0392B` | Critical / high risk |
| `rag-amber` | `#D35400` | Elevated / medium risk |
| `rag-green` | `#27AE60` | Normal / low risk |

### Accessibility Note

`#009FDA` on white fails WCAG AA for small text (contrast ~2.7:1). Use `#009FDA` only for borders, backgrounds, icons, and large text (≥18px bold). Use `#002244` for all body text and labels.

---

## WB Vertical Brand Colors

The official WBG palette organized by thematic vertical. Each vertical has a base color and 9 tints (10%–90%). Use **one vertical palette only** within a given asset — do not mix palettes.

> **Data viz note:** These verticals are designed for thematic branding, not multi-category chart comparison. For charts and maps, see [`../data-viz/palettes.md`](../data-viz/palettes.md).

### People (Yellow) `#F7B841`

| Tint | Hex |
|------|-----|
| Base (100%) | `#F7B841` |
| 90% | `#F8BF54` |
| 80% | `#F9C667` |
| 70% | `#F9CD7A` |
| 60% | `#FAD48D` |
| 50% | `#FBDBA0` |
| 40% | `#FCE3B3` |
| 30% | `#FDEAC6` |
| 20% | `#FDF1D9` |
| 10% | `#FEF8EC` |

### Prosperity (Purple) `#872C8F`

| Tint | Hex |
|------|-----|
| Base (100%) | `#872C8F` |
| 90% | `#93419A` |
| 80% | `#9F56A5` |
| 70% | `#AB6BB1` |
| 60% | `#B780BC` |
| 50% | `#C395C7` |
| 40% | `#CFABD2` |
| 30% | `#DBC0DD` |
| 20% | `#E7D5E9` |
| 10% | `#F3EAF4` |

### Planet (Green) `#07AB50`

| Tint | Hex |
|------|-----|
| Base (100%) | `#07AB50` |
| 90% | `#20B361` |
| 80% | `#39BC73` |
| 70% | `#51C484` |
| 60% | `#6ACD96` |
| 50% | `#83D5A7` |
| 40% | `#9CDDB9` |
| 30% | `#B5E6CA` |
| 20% | `#CDEEDC` |
| 10% | `#E6F7ED` |

### Planet / Marine (Teal) `#009CA7`

| Tint | Hex |
|------|-----|
| Base (100%) | `#009CA7` |
| 90% | `#19A6B0` |
| 80% | `#33B0B9` |
| 70% | `#4CBAC1` |
| 60% | `#66C4CA` |
| 50% | `#7FCDD3` |
| 40% | `#99D7DC` |
| 30% | `#B2E1E4` |
| 20% | `#CCEBED` |
| 10% | `#E5F5F6` |

### Infrastructure (Red) `#91302F`

| Tint | Hex |
|------|-----|
| Base (100%) | `#91302F` |
| 90% | `#9C4544` |
| 80% | `#A75959` |
| 70% | `#B26E6D` |
| 60% | `#BD8382` |
| 50% | `#C89797` |
| 40% | `#D3ACAC` |
| 30% | `#DEC1C1` |
| 20% | `#E9D6D5` |
| 10% | `#F4EAEA` |

### Digital (Gray) `#5D6472`

| Tint | Hex |
|------|-----|
| Base (100%) | `#5D6472` |
| 90% | `#6B7481` |
| 80% | `#7C848F` |
| 70% | `#8C939D` |
| 60% | `#9DA3AB` |
| 50% | `#ADB2B9` |
| 40% | `#BDC1C7` |
| 30% | `#CED1D5` |
| 20% | `#DEE0E3` |
| 10% | `#EFF0F1` |

### Corporate / Knowledge Management (Navy) `#004972`

| Tint | Hex |
|------|-----|
| Base (100%) | `#004972` |
| 90% | `#195B80` |
| 80% | `#336D8E` |
| 70% | `#4C809C` |
| 60% | `#6692AA` |
| 50% | `#80A4B8` |
| 40% | `#99B6C7` |
| 30% | `#B2C8D5` |
| 20% | `#CCDBE3` |
| 10% | `#E5EDF1` |

---

## Color Rules (from WBG Style Guide)

- Use **one vertical palette** per product/asset
- Never mix vertical palettes
- Tint usage: Base → primary elements; 70–90% → secondary; 10–40% → backgrounds
- Do not create custom colors outside this system
- No gradients on UI chrome (gradients are for data viz only — choropleths, heatmaps)

---

## See Also

- [`colors.json`](colors.json) — machine-readable tokens
- [`../data-viz/palettes.md`](../data-viz/palettes.md) — chart and map palettes (not the vertical brand colors)
- [`../references/styleguide.md`](../references/styleguide.md) — extracted style guide reference
