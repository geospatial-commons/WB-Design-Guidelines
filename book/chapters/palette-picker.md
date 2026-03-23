# WB Palette Picker

Interactive tool for finding and copying WB-compliant color palettes for data visualization. Filter by palette type, preview colors in context, and grab copy-paste code snippets for your tool.

:::{admonition} Piloted with MENAAP Region Team
:class: tip
These palettes are developed and maintained for data visualization and front-end development. They use **WB brand colors** arranged for data viz best practice — accessible, perceptually ordered, and colorblind-safe where indicated. Scoped to MENAAP region and Afghanistan country programs.
:::

For the UK Gov Analysis Function reference palettes (general-purpose accessible data viz), see {doc}`data-viz`.

---

## How to Use

1. **Filter** by palette type using the buttons below, or enable **Colorblind-safe only**
2. **Click any color swatch or hex chip** to copy that hex value to your clipboard
3. **Click "Copy hex array"** to copy a ready-to-paste Python list
4. **Click "Code snippets"** to expand copy-paste code for Plotly, Matplotlib, ggplot2, or CSS

---

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

  <!-- Toast notification -->
  <div id="pp-toast" class="pp-toast" role="status" aria-live="polite"></div>

</div>
```

---

## Palette Reference

Static reference table for non-interactive environments.

### Categorical

| Palette | Colors | Colorblind-safe |
|---------|--------|-----------------|
| WB Categorical | `#002244` `#009FDA` `#F7B841` `#872C8F` `#00A996` `#91302F` | Yes |
| WB Duo | `#002244` `#F7B841` | Yes |
| WB Focus / Highlight | `#009FDA` (active) `#BFBFBF` (background) | Yes |

### Sequential

| Palette | Colors (light → dark) | Colorblind-safe |
|---------|----------------------|-----------------|
| WB Blue Sequential | `#E8F5FC` `#7DCFED` `#009FDA` `#005F8A` `#002244` | Yes |
| WB Teal Sequential | `#E6F7F5` `#7DD5CB` `#00A996` `#007A6E` `#003D38` | Yes |

### Diverging

| Palette | Colors (negative → neutral → positive) | Colorblind-safe |
|---------|----------------------------------------|-----------------|
| WB Blue–Yellow Diverging | `#002244` `#336D8E` `#99B6C7` `#F7F8FA` `#FCE3B3` `#F9CD7A` `#F7B841` | Yes |

---

```{raw} html
<div class="pp-footer">
  <strong>Scope:</strong> MENAAP Region &amp; Afghanistan country programs &middot;
  Data visualization &amp; front-end development<br>
  <strong>Note:</strong> These palettes are designed for data visualization, not for branding or print.
  All palettes have been checked for WCAG AA contrast on white backgrounds.
  Colorblind-safe palettes are distinguishable for deuteranopia and protanopia.
</div>
```
