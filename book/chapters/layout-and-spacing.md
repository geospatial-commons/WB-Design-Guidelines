# Layout & Spacing

Layout patterns and spacing standards for WB dashboards. Adapted from the WBG Digital Look & Feel Style Guide and field-tested in WB dashboard development.

---

## Spacing Scale

Base unit: **4px**

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight internal padding |
| `sm` | 8px | Component inner spacing |
| `md` | 16px | Standard spacing |
| `lg` | 24px | Section spacing, main content padding |
| `xl` | 32px | Large gaps, panel padding |
| `2xl` | 48px | Page-level spacing |

---

## Dashboard Shell

Standard two-panel layout for WB data dashboards:

```
+--[56px Nav Bar: #002244]------------------------------------------+
| [WB Logo]  [Dashboard Title]                    [Status / Badge]  |
+--[224px Sidebar: #002244]---+--[Main Content Area]----------------+
| Navigation                  | Background: #F7F8FA                 |
|  Section Label              | Max-width: 1400px                   |
|    Nav Item (active)        | Padding: 24px                       |
|    Nav Item                 |                                     |
|                             | [KPI Strip]                         |
|  Section Label              |                                     |
|    Nav Item                 | [Charts / Maps / Tables]            |
|    Nav Item                 |                                     |
|                             |                                     |
| [Footer: data sources]      |                                     |
| [Footer: date range]        |                                     |
+-----------------------------+-------------------------------------+
```

### Nav Bar (56px)
- Background: `#002244`
- Left: WB globe mark + "WORLD BANK" (Open Sans 600, 11px, white, letter-spacing: 0.1em)
- Center/Left: Dashboard title (Open Sans 700, 18px, white)
- Right: Status badge or controls
- Border-bottom: `1px solid rgba(255,255,255,0.12)`

### Sidebar (224px)
- Background: `#002244`
- Active nav item: `#009FDA` background, white text
- Hover: `rgba(255,255,255,0.10)`
- Section labels: white/40%, 10px, 600, uppercase
- Nav item text: white/80% inactive, white active
- Footer: data source credits + date range (white/40%, 12px)

### Main Content
- Background: `#F7F8FA`
- Max-width: 1400px
- Padding: 24px

---

## Responsive Breakpoints

This is primarily a **desktop tool** — dashboards are for analysts and program managers, not mobile users. "Responsive" means usable on a laptop in a meeting, not optimized for phones.

| Breakpoint | Sidebar | Content | Priority |
|------------|---------|---------|----------|
| ≥1280px | 224px fixed | Full layout | Primary target |
| 1024–1280px | 224px fixed | Slightly tighter | Secondary |
| 768–1024px | Collapsible (hamburger) | Full content | Tertiary |
| <768px | Hidden (drawer) | Single column | Not a priority |

---

## Content Layout Patterns

### KPI Strip
5 cards in a row, white background, `#009FDA` left-border accent (4px). One "feature" card (solid `#002244`, white text) for the primary metric. No more than one feature card per strip.

### Card Grid
Standard: 3-column grid on ≥1280px, 2-column on 1024–1280px, 1-column on mobile.

### Full-Width Sections
Maps and wide charts should be full-width within the content area. Use consistent `border-radius: 8px` and `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` on card containers.

---

## WBG Composition Principles

From the official style guide:
- Clean, minimal composition
- Strong focal point
- Clear hierarchy: Title → Visual → Supporting text
- Edge-to-edge imagery where used
- No frames or decorative borders on content
- White space is authority — when in doubt, subtract
