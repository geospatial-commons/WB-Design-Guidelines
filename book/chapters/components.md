# Components

Dashboard component patterns for WB data products. Generalized from field use — not product-specific.

---

## WB Nav Bar

Full-width identity bar at the top of the dashboard. Sits above the sidebar + content split.

```
+-----------------------------------------------------------------+
| ○◐  WORLD BANK  |  [Dashboard Title]             [Status Badge]|
+-----------------------------------------------------------------+
  wb-navy bg        Open Sans 700, white 18px       right-aligned
  Globe mark 16px
  "WORLD BANK"
  Open Sans 600, 11px, white, letter-spacing: 0.08em
```

**Specs:**
- Height: 56px
- Background: `#002244`
- Border-bottom: `1px solid rgba(255,255,255,0.12)`
- Globe mark: SVG (see [WB Logo Treatment](#wb-logo-treatment) below)

---

## Sidebar

Navigation panel, left-anchored.

- Width: 224px
- Background: `#002244`
- Active item: `background: #009FDA`, white text
- Hover: `background: rgba(255,255,255,0.10)`
- Section labels: white/40%, 10px, 600, uppercase
- Nav item text: white/80% (inactive), white (active)
- Footer: data source credits + date range, white/40%, 12px

---

## KPI Card

**Default variant** (border-left accent):
- Background: white
- Left border: `4px solid #009FDA`
- Title: 10px, 600, `#6B7280`, uppercase, letter-spacing
- Value: 24px, 700, `#111827`
- Hover: subtle shadow lift

**Feature variant** (primary metric):
- Background: `#002244` (solid navy)
- Text: white
- Use for one card per KPI strip — the single most important metric
- No border accent needed

---

## Data Table

- Header background: `#EEF0F3`
- Header text: 12px, 600, `#6B7280`, uppercase
- Row height: 40px minimum
- Body text: 14px, 400, `#111827`
- Alternating rows: white / `#F7F8FA`
- No heavy borders — use subtle row dividers only (`1px solid #EEF0F3`)
- Sortable columns: indicate with icon, active sort in `#009FDA`

---

## Filter Bar

- Input height: 36px
- Background: white, border: `1px solid #EEF0F3`
- Active/focus: border `#009FDA`
- Spacing between filters: 12px
- Button (apply/reset): `#009FDA` fill, white text, 14px, 600
- On mobile: stack vertically, full-width inputs

---

## Map Container

- Container background: white
- Border-radius: 8px
- Box-shadow: `0 1px 3px rgba(0,0,0,0.08)`
- Legend: bottom-left or bottom-right, white background, 12px text
- Attribution: bottom-right, 10px, `#6B7280`
- Include a visually-hidden "Skip to data table" link above the map canvas for accessibility

---

## Chart Container

- Container: white background, `border-radius: 8px`, subtle shadow
- Chart title: 15px, 700, `#111827`, above the chart
- Axes: light gray (`#EEF0F3`), no heavy lines
- Gridlines: dashed, `#EEF0F3`, opacity low — should support reading, not dominate
- See {doc}`chart-guidelines` for full chart styling

---

## WB Logo Treatment

Text-based treatment (no external image dependency):

```
○◐  WORLD BANK
```

- Globe: SVG (self-contained, no external file):

```svg
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="9" stroke="white" stroke-width="1.5"/>
  <path d="M10 1 C7 4 7 16 10 19" stroke="white" stroke-width="1.5"/>
  <path d="M10 1 C13 4 13 16 10 19" stroke="white" stroke-width="1.5"/>
  <path d="M1 10 H19" stroke="white" stroke-width="1.5"/>
  <path d="M2 6 H18 M2 14 H18" stroke="white" stroke-width="1"/>
</svg>
```

- "WORLD BANK" text: Open Sans 600, 11px, white, `letter-spacing: 0.1em`, all caps

---

## Interaction States

| Component | Loading | Empty | Error |
|-----------|---------|-------|-------|
| Map | Province/region pulse shimmer | "No data in selected period" centered | "Map data unavailable" overlay |
| KPI strip | Skeleton cards (gray animated) | Show "–" with tooltip | Last-known value + "stale data" label |
| Data table | Skeleton rows | "No records in this period" | Retry button |
| Chart | Skeleton bar/line | "No data" message | Inline error with retry |

---

## What NOT to Do

- No gradients on UI chrome (gradients for data viz only — choropleths, heatmaps)
- No decorative frames or borders around content cards
- No marketing copy — labels should be operational ("Conflict Events", not "Track what's happening")
- No loading spinners where skeleton loaders are possible
- Do not load fonts from an external CDN — use `next/font/google`
