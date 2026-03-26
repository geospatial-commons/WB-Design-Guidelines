# Chart Guidelines

Styling standards for charts and maps in WB data products. For color palettes, see {doc}`palettes`.

---

## Axes

- Axis lines: `#D9D9D9`, 1px; light, not dominant
- Tick marks: omit or keep minimal
- Labels: 12px, `#595959`, Open Sans 400
- Y-axis label: horizontal where possible (avoid rotated text)
- Start axes at zero for bar charts; do not truncate the baseline

## Gridlines

- Color: `#D9D9D9`; light grey
- Style: dashed preferred
- Gridlines should support reading, not dominate the chart
- Horizontal gridlines only (no vertical gridlines in bar/line charts)

## Legends

- Position: right of chart (wide screens) or below the chart
- Label format: match the data series label exactly
- Swatch size: 12×12px minimum
- Do not use legends when direct labeling is feasible; direct labels are clearer

## Tooltips

- Background: white
- Border: `1px solid #D9D9D9`
- Font: 13px, `#111827`, Open Sans
- Padding: 8px 12px
- Show: series name + value + unit

## Do's and Don'ts

> **Phase 2:** Side-by-side correct/incorrect SVG chart examples will be added here: bar chart, choropleth, RAG table, and axis/gridline treatment.

**Do:**
- Label data directly on lines and bars where space allows
- Use the sequential palette for single-metric continuous data (choropleths, heatmaps)
- Use the categorical palette for multi-series comparison charts
- Include a plain-text data table alongside all charts for accessibility

**Don't:**
- Use rainbow colors for categorical data; use a WB palette in order
- Invert sequential scales (darkest should always = highest)
- Use gridlines heavier than the data itself
- Rely on color alone to encode information
