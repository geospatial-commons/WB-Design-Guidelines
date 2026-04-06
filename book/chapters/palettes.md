# Color Palettes

Pick a WB palette, copy the code. Filter by type, preview colors, and grab ready-to-paste snippets for Plotly, Matplotlib, ggplot2, or CSS.

---

## Palette Picker

1. **Filter** by palette type using the buttons below, or enable **Colorblind-safe only**
2. **Click any color swatch or hex chip** to copy that hex value to your clipboard
3. **Click "Copy hex array"** to copy a ready-to-paste Python list
4. **Click "Code snippets"** to expand copy-paste code for Plotly, Matplotlib, ggplot2, or CSS

```{raw} html
<div id="palette-picker-root">

  <!-- Filter bar -->
  <div class="pp-filters">
    <span class="pp-filter-label">Type:</span>
    <button class="pp-filter-btn pp-active" data-type="all">All</button>
    <button class="pp-filter-btn" data-type="categorical">Categorical</button>
    <button class="pp-filter-btn" data-type="sequential">Sequential</button>
    <button class="pp-filter-btn" data-type="diverging">Diverging</button>
    <label class="pp-cb-toggle">
      <input type="checkbox" id="pp-colorblind-toggle">
      Colorblind-safe only
    </label>
  </div>

  <!-- Palette cards rendered by JS -->
  <div id="pp-palette-list">
    <p style="color:#9CA3AF;font-size:13px;">Loading palettes&hellip;</p>
  </div>

</div>
```

---

## Palette Reference

### WB Categorical (default)

WB brand colors arranged for multi-category chart comparison. Use when your product requires visual alignment with WB brand identity.

```{raw} html
<div style="display:grid; grid-template-columns:repeat(6,1fr); gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#002244" style="background-color:#002244; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#002244</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Navy</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#009FDA" style="background-color:#009FDA; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#009FDA</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#F7B841" style="background-color:#F7B841; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#F7B841</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Yellow</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#872C8F" style="background-color:#872C8F; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#872C8F</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Purple</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#00A996" style="background-color:#00A996; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#00A996</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Teal</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#91302F" style="background-color:#91302F; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#91302F</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Red</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>
```

| # | Name | Hex | When to use |
|---|------|-----|-------------|
| 1 | Navy | `#002244` | First / primary series |
| 2 | Blue | `#009FDA` | Second series |
| 3 | Yellow | `#F7B841` | Third series |
| 4 | Purple | `#872C8F` | Fourth series |
| 5 | Teal | `#00A996` | Fifth; use sparingly |
| 6 | Red | `#91302F` | Sixth; use sparingly |

**Rules:**
- Use colors in order; do not skip or rearrange
- **Limit to 4 colors** wherever possible. If you need 5–6, consider restructuring the chart
- Colorblind-safe and renders legibly in greyscale
- Never rely on color alone; label lines/bars directly

---

### Alternative Categorical (UK Gov Analysis Function)

UK Government Analysis Function palette — institutional dashboards requiring highest colorblind safety and greyscale legibility. All adjacent pairs have a contrast ratio of at least 3:1.

**Source:** [UK Government Analysis Function: Data visualisation: colours in charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/)

```{raw} html
<div style="display:grid; grid-template-columns:repeat(6,1fr); gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#12436D" style="background-color:#12436D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#12436D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#28A197" style="background-color:#28A197; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#28A197</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Turquoise</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#801650" style="background-color:#801650; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#801650</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark pink</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#F46A25" style="background-color:#F46A25; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#F46A25</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Orange</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#3D3D3D" style="background-color:#3D3D3D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#3D3D3D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark grey</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#A285D1" style="background-color:#A285D1; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#A285D1</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Light purple</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>
```

| # | Name | Hex | When to use |
|---|------|-----|-------------|
| 1 | Dark blue | `#12436D` | First / primary series (highest contrast) |
| 2 | Turquoise | `#28A197` | Second series |
| 3 | Dark pink | `#801650` | Third series |
| 4 | Orange | `#F46A25` | Fourth series |
| 5 | Dark grey | `#3D3D3D` | Fifth; use sparingly |
| 6 | Light purple | `#A285D1` | Sixth; use sparingly |

#### Duo (two-series charts)

When comparing exactly two categories, use this high-contrast pair:

```{raw} html
<div style="display:grid; grid-template-columns:repeat(2,1fr); gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#12436D" style="background-color:#12436D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#12436D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#F46A25" style="background-color:#F46A25; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#F46A25</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Orange</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>
```

---

### Sequential Palette

For ordered/continuous data: rankings, intensity, magnitude. Use for choropleths, heatmaps, and single-metric bar charts where magnitude matters.

```{raw} html
<div style="display:grid; grid-template-columns:repeat(6,1fr); gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#092135" style="background-color:#092135; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#092135</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Darkest blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#12436D" style="background-color:#12436D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#12436D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Dark blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#2073BC" style="background-color:#2073BC; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#2073BC</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Mid blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#6BACE6" style="background-color:#6BACE6; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#6BACE6</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Light blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#ADD1F1" style="background-color:#ADD1F1; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#ADD1F1</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Lightest blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#F2F2F2" style="background-color:#F2F2F2; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.12);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#F2F2F2</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Pale grey (null)</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>
```

| Steps | Colors to use |
|-------|---------------|
| 2 | Dark blue, Light blue |
| 3 | Dark blue, Mid blue, Light blue |
| 4 | Darkest blue, Dark blue, Mid blue, Light blue |
| 5 | Full range (all 5 blues) |

**Rules:**
- Darkest = highest value; always
- Pale grey (`#F2F2F2`) is reserved for null / no data / suppressed values only; never a data category
- For light-colored bars, add a visible border so bar size is legible without color
- Always provide a data table or text description as an accessible alternative

---

### Focus / Highlight Palette

For drawing attention to a specific series or data point while de-emphasizing the rest.

```{raw} html
<div style="display:grid; grid-template-columns:repeat(2,1fr); gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#12436D" style="background-color:#12436D; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#12436D</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Focus color</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#BFBFBF" style="background-color:#BFBFBF; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#BFBFBF</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Background (muted)</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>
```

**Tip:** Make the focused element slightly thicker (line weight or bar outline) in addition to the color difference.

---

### RAG / Status Colors

Red-Amber-Green for status tables and KPI indicators. **Tables and scorecards only**; not for charts.

```{raw} html
<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#D73027" style="background-color:#D73027; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#D73027</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Red: Critical</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#FFFFBF" style="background-color:#FFFFBF; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.12);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#FFFFBF</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Yellow: Caution</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#1A9850" style="background-color:#1A9850; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#1A9850</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Green: On track</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>
```

| Status | Hex | Notes |
|--------|-----|-------|
| Red | `#D73027` | Critical / high risk |
| Yellow | `#FFFFBF` | Caution / elevated |
| Green | `#1A9850` | Normal / on track |

---

### Chart Furniture Colors

```{raw} html
<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#D9D9D9" style="background-color:#D9D9D9; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.12);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#D9D9D9</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Gridlines</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#595959" style="background-color:#595959; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#595959</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Axis labels</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#FFFFFF" style="background-color:#FFFFFF; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.15);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#FFFFFF</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">Chart background</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>
```

---

## Accessibility

1. **Contrast:** Minimum 3:1 for graphic elements; 4.5:1 for text
2. **Don't rely on color alone**; label lines directly, use patterns in addition to color where possible
3. **Provide alternatives**; always include a data table or plain-text description alongside charts
4. **Test everything** with a colorblind simulator before publishing

**Testing tools:**
- [Coblis colorblind simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/)
- [Adobe Color accessibility tool](https://color.adobe.com/create/color-accessibility)

---

## Quick Reference Table

### Categorical

| Palette | Colors | Colorblind-safe |
|---------|--------|-----------------|
| WB Categorical | `#002244` `#009FDA` `#F7B841` `#872C8F` `#00A996` `#91302F` | Yes |
| Alternative Categorical | `#12436D` `#28A197` `#801650` `#F46A25` `#3D3D3D` `#A285D1` | Yes |
| WB Duo | `#002244` `#F7B841` | Yes |
| WB Focus / Highlight | `#009FDA` (active) `#BFBFBF` (background) | Yes |
| RAG Status | `#D73027` `#FFFFBF` `#1A9850` | No |

### Sequential

| Palette | Colors (light → dark) | Colorblind-safe |
|---------|----------------------|-----------------|
| WB Blue Sequential | `#E8F5FC` `#7DCFED` `#009FDA` `#005F8A` `#002244` | Yes |
| WB Teal Sequential | `#E6F7F5` `#7DD5CB` `#00A996` `#007A6E` `#003D38` | Yes |

### Diverging

| Palette | Colors (negative → neutral → positive) | Colorblind-safe |
|---------|----------------------------------------|-----------------|
| WB Blue–Yellow Diverging | `#002244` `#336D8E` `#99B6C7` `#F7F8FA` `#FCE3B3` `#F9CD7A` `#F7B841` | Yes |
| RAG Diverging | `#D73027` `#FC8D59` `#FEE08B` `#FFFFBF` `#D9EF8B` `#91CF60` `#1A9850` | No |

---

```{raw} html
<div class="pp-footer">
  <strong>Note:</strong> These palettes are designed for data visualization, not for branding or print.
  All palettes have been checked for WCAG AA contrast on white backgrounds.
  Colorblind-safe palettes are distinguishable for deuteranopia and protanopia.
</div>
```
