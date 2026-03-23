# Data Visualization

Color palettes and chart guidelines for WB data products. Palettes based on the **UK Government Analysis Function** color system; purpose-built for institutional dashboards, colorblind-safe, and WCAG-compliant.

> **Looking for WB-branded palettes with copy-paste code?** See {doc}`palette-picker` for an interactive palette finder using WB brand colors, with snippets for Plotly, Matplotlib, ggplot2, and CSS.

> **Why not standard WB brand colors here?** The WB vertical palettes are single-hue thematic identities, not designed for multi-category chart comparison. The UK Gov palettes solve the same problem (institutional trust, accessibility) and anchor in navy, visually compatible with WB's `#002244`.

**Source:** [UK Government Analysis Function: Data visualisation: colours in charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/)

---

## Color Palettes

Click any swatch to copy the hex code.

### Categorical Palette

For data divided into named groups (bar charts, line charts, pie charts, maps with discrete categories).

<div style="display:flex; flex-wrap:wrap; gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#12436D" style="background-color:#12436D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#12436D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#28A197" style="background-color:#28A197; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#28A197</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Turquoise</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#801650" style="background-color:#801650; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#801650</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark pink</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#F46A25" style="background-color:#F46A25; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#F46A25</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Orange</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#3D3D3D" style="background-color:#3D3D3D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#3D3D3D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark grey</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#A285D1" style="background-color:#A285D1; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#A285D1</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Light purple</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>

| # | Name | Hex | When to use |
|---|------|-----|-------------|
| 1 | Dark blue | `#12436D` | First / primary series (highest contrast) |
| 2 | Turquoise | `#28A197` | Second series |
| 3 | Dark pink | `#801650` | Third series |
| 4 | Orange | `#F46A25` | Fourth series |
| 5 | Dark grey | `#3D3D3D` | Fifth; use sparingly |
| 6 | Light purple | `#A285D1` | Sixth; use sparingly |

**Rules:**
- Use colors in order; do not skip or rearrange
- **Limit to 4 colors** wherever possible. If you need 5–6, consider restructuring the chart
- All adjacent pairs have a contrast ratio of at least 3:1
- Colorblind-safe and renders legibly in greyscale
- Never rely on color alone; label lines/bars directly

#### Duo (two-series charts)

When comparing exactly two categories, use this high-contrast pair:

<div style="display:flex; flex-wrap:wrap; gap:4px; margin:8px 0;">
  <div class="wb-swatch" data-hex="#12436D" style="background-color:#12436D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#12436D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#F46A25" style="background-color:#F46A25; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#F46A25</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Orange</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>

### WB Categorical Palette

WB brand colors arranged for multi-category chart comparison. Use when your product requires visual alignment with WB brand identity. See {doc}`palette-picker` for copy-paste code snippets.

<div style="display:flex; flex-wrap:wrap; gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#002244" style="background-color:#002244; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#002244</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">WB Navy</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#009FDA" style="background-color:#009FDA; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#009FDA</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">WB Blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#F7B841" style="background-color:#F7B841; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#F7B841</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">People Yellow</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#872C8F" style="background-color:#872C8F; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#872C8F</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Prosperity Purple</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#00A996" style="background-color:#00A996; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#00A996</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">WB Teal</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#91302F" style="background-color:#91302F; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#91302F</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Infrastructure Red</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>

| # | Name | Hex | When to use |
|---|------|-----|-------------|
| 1 | WB Navy | `#002244` | First / primary series |
| 2 | WB Blue | `#009FDA` | Second series |
| 3 | People Yellow | `#F7B841` | Third series |
| 4 | Prosperity Purple | `#872C8F` | Fourth series |
| 5 | WB Teal | `#00A996` | Fifth; use sparingly |
| 6 | Infrastructure Red | `#91302F` | Sixth; use sparingly |

---

### Sequential Palette

For ordered/continuous data: rankings, intensity, magnitude. Use for choropleths, heatmaps, and single-metric bar charts where magnitude matters.

<div style="display:flex; flex-wrap:wrap; gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#092135" style="background-color:#092135; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#092135</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Darkest blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#12436D" style="background-color:#12436D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#12436D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#2073BC" style="background-color:#2073BC; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#2073BC</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Mid blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#6BACE6" style="background-color:#6BACE6; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#6BACE6</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Light blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#ADD1F1" style="background-color:#ADD1F1; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#ADD1F1</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Lightest blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#F2F2F2" style="background-color:#F2F2F2; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.12);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#F2F2F2</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Pale grey (null)</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>

| Steps | Colors to use |
|-------|---------------|
| 2 | Dark blue, Light blue |
| 3 | Dark blue, Mid blue, Light blue |
| 4 | Darkest blue, Dark blue, Mid blue, Light blue |
| 5 | Full range (all 5) |

**Rules:**
- Darkest = highest value; always
- Pale grey (`#F2F2F2`) is reserved for null / no data / suppressed values only; never a data category
- For light-colored bars, add a visible border so bar size is legible without color
- Always provide a data table or text description as an accessible alternative

### Focus / Highlight Palette

For drawing attention to a specific series or data point while de-emphasizing the rest.

<div style="display:flex; flex-wrap:wrap; gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#12436D" style="background-color:#12436D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#12436D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Focus color</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#BFBFBF" style="background-color:#BFBFBF; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#BFBFBF</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Background (muted)</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>

**Tip:** Make the focused element slightly thicker (line weight or bar outline) in addition to the color difference.

### RAG / Status Colors

Red-Amber-Green for status tables and KPI indicators. **Tables and scorecards only**; not for charts.

<div style="display:flex; flex-wrap:wrap; gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#C00000" style="background-color:#C00000; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#C00000</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Red: Critical</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#FFC000" style="background-color:#FFC000; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#FFC000</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Amber: Caution</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#8ED973" style="background-color:#8ED973; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#8ED973</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Green: On track</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>

| Status | Hex | Text color | Notes |
|--------|-----|------------|-------|
| Red | `#C00000` | White | Critical / high risk |
| Amber | `#FFC000` | Black | Caution / elevated |
| Green | `#8ED973` | Black | Normal / on track |

> **Note:** These differ from the dashboard RAG tokens in {doc}`design-system` (`rag-red`, `rag-amber`, `rag-green`), which are tuned for UI badge/pill elements on white backgrounds. Use the UK Gov values above for filled table cells.

### Chart Furniture Colors

<div style="display:flex; flex-wrap:wrap; gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#D9D9D9" style="background-color:#D9D9D9; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.12);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#D9D9D9</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Gridlines</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#595959" style="background-color:#595959; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#595959</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Axis labels</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#FFFFFF" style="background-color:#FFFFFF; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; flex:1 1 140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.15);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#FFFFFF</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Chart background</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>

### Accessibility Rules

1. **Contrast:** Minimum 3:1 for graphic elements; 4.5:1 for text
2. **Don't rely on color alone**; label lines directly, use patterns in addition to color where possible
3. **Provide alternatives**; always include a data table or plain-text description alongside charts
4. **Test everything** with a colorblind simulator before publishing

**Testing tools:**
- [Coblis colorblind simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/)
- [Adobe Color accessibility tool](https://color.adobe.com/create/color-accessibility)

---

## Chart Guidelines

Styling standards for charts and maps in WB data products.

### Axes

- Axis lines: `#D9D9D9`, 1px; light, not dominant
- Tick marks: omit or keep minimal
- Labels: 12px, `#595959`, Open Sans 400
- Y-axis label: horizontal where possible (avoid rotated text)
- Start axes at zero for bar charts; do not truncate the baseline

### Gridlines

- Color: `#D9D9D9`; light grey
- Style: dashed preferred
- Gridlines should support reading, not dominate the chart
- Horizontal gridlines only (no vertical gridlines in bar/line charts)

### Legends

- Position: right of chart (wide screens) or below the chart
- Label format: match the data series label exactly
- Swatch size: 12×12px minimum
- Do not use legends when direct labeling is feasible; direct labels are clearer

### Tooltips

- Background: white
- Border: `1px solid #D9D9D9`
- Font: 13px, `#111827`, Open Sans
- Padding: 8px 12px
- Show: series name + value + unit

### Do's and Don'ts

> **Phase 2:** Side-by-side correct/incorrect SVG chart examples will be added here: bar chart, choropleth, RAG table, and axis/gridline treatment.

**Do:**
- Label data directly on lines and bars where space allows
- Use the sequential palette for single-metric continuous data (choropleths, heatmaps)
- Use the categorical palette for multi-series comparison charts
- Include a plain-text data table alongside all charts for accessibility

**Don't:**
- Use rainbow colors for categorical data; use the UK Gov palette in order
- Invert sequential scales (darkest should always = highest)
- Use gridlines heavier than the data itself
- Rely on color alone to encode information
