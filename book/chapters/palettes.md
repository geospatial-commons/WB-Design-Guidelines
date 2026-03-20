# Data Visualization Palettes

Color palettes for charts, graphs, and maps in WB data products. Based on the **UK Government Analysis Function** color system — purpose-built for institutional dashboards, colorblind-safe, and WCAG-compliant.

> **Why not standard WB brand colors?** The WB vertical palettes are single-hue thematic identities, not designed for multi-category chart comparison. The UK Gov palettes solve the same problem (institutional trust, accessibility) and happen to anchor in navy — visually compatible with WB's `#002244`.

**Source:** [UK Government Analysis Function — Data visualisation: colours in charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/) · [Accessible colour codes](https://analysisfunction.civilservice.gov.uk/policy-store/codes-for-accessible-colours/)

---

## Categorical Palette

For data divided into named groups (bar charts, line charts, pie charts, maps with discrete categories).

| # | Name | Hex | RGB | When to use |
|---|------|-----|-----|-------------|
| 1 | Dark blue | `#12436D` | 18, 67, 109 | First / primary series — highest contrast |
| 2 | Turquoise | `#28A197` | 40, 161, 151 | Second series |
| 3 | Dark pink | `#801650` | 128, 22, 80 | Third series |
| 4 | Orange | `#F46A25` | 244, 106, 37 | Fourth series |
| 5 | Dark grey | `#3D3D3D` | 61, 61, 61 | Fifth — use sparingly |
| 6 | Light purple | `#A285D1` | 162, 133, 209 | Sixth — use sparingly |

**Rules:**
- Use colors in order — do not skip or rearrange
- **Limit to 4 colors** wherever possible. If you need 5–6, consider restructuring the chart
- All adjacent pairs have a contrast ratio of at least 3:1
- Colorblind-safe and renders legibly in greyscale
- Never rely on color alone — label lines/bars directly

### Duo (two-series charts)

When comparing exactly two categories, use this high-contrast pair:

| Name | Hex |
|------|-----|
| Dark blue | `#12436D` |
| Orange | `#F46A25` |

---

## Sequential Palette

For ordered/continuous data — rankings, intensity, magnitude. Use for choropleths, heatmaps, and single-metric bar charts where magnitude matters.

| Steps | Colors to use |
|-------|---------------|
| 2 | Dark blue, Light blue |
| 3 | Dark blue, Mid blue, Light blue |
| 4 | Darkest blue, Dark blue, Mid blue, Light blue |
| 5 | Full range (all 5) |

| Name | Hex | RGB |
|------|-----|-----|
| Darkest blue | `#092135` | 9, 33, 53 |
| Dark blue | `#12436D` | 18, 67, 109 |
| Mid blue | `#2073BC` | 32, 115, 188 |
| Light blue | `#6BACE6` | 107, 172, 230 |
| Lightest blue | `#ADD1F1` | 173, 209, 241 |
| Pale grey | `#F2F2F2` | 242, 242, 242 — null / suppressed data only |

**Rules:**
- Darkest = highest value (or most intense) — always
- Grey (`#F2F2F2`) is reserved for null / no data / suppressed values only, never a data category
- For light-colored bars, add a visible border so bar size is legible without color
- Always provide a data table or text description as an accessible alternative

---

## Focus / Highlight Palette

For drawing attention to a specific series or data point while de-emphasizing the rest.

| Role | Hex | Usage |
|------|-----|-------|
| Focus color | `#12436D` | The element(s) you want the reader to notice |
| Background color | `#BFBFBF` | All other elements — muted grey |

**Tip:** Make the focused element slightly thicker (line weight or bar outline) in addition to the color difference.

---

## RAG / Status Colors

Red-Amber-Green for status tables and KPI indicators. **Tables and scorecards only** — not for charts.

| Status | Hex | Text color | Notes |
|--------|-----|------------|-------|
| Red | `#C00000` | White | Critical / high risk |
| Amber | `#FFC000` | Black | Caution / elevated |
| Green | `#8ED973` | Black | Normal / on track |

> **Note:** These differ from the dashboard RAG tokens (`rag-red`, `rag-amber`, `rag-green`) in {doc}`colors`, which are tuned for UI components on white backgrounds. Use the UK Gov values above for filled table cells; use the dashboard tokens for badge/pill UI elements.

---

## Chart Furniture Colors

| Element | Hex | Notes |
|---------|-----|-------|
| Gridlines | `#D9D9D9` | Light grey — subtle, not dominant |
| Axis labels | `#595959` | Dark grey — meets 4.5:1 contrast on white |
| Chart background | `#FFFFFF` | Always white |

---

## Accessibility Rules

1. **Contrast:** Minimum 3:1 for graphic elements; 4.5:1 for text
2. **Don't rely on color alone** — label lines directly, use patterns in addition to color where possible
3. **Provide alternatives** — always include a data table or plain-text description alongside charts
4. **Test everything** with a colorblind simulator before publishing

**Testing tools:**
- [Coblis colorblind simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/)
- [Adobe Color accessibility tool](https://color.adobe.com/create/color-accessibility)

---

## See Also

- {doc}`chart-guidelines` — axis styling, gridlines, legends, tooltips
- {doc}`colors` — WB brand colors (separate from data viz)
