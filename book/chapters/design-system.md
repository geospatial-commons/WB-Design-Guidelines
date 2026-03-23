# Design System

WB visual and interaction standards for digital dashboards and data products. Sourced from the WBG Digital Look & Feel Style Guide and adapted for front-end development.

---

## Colors

### Core Dashboard Palette

The practical color set for building WB dashboards. Click any swatch to copy the hex code.

<div style="display:flex; flex-wrap:wrap; gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#009FDA" style="background-color:#009FDA; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#009FDA</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">wb-blue</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#002244" style="background-color:#002244; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#002244</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">wb-navy</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#00A996" style="background-color:#00A996; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#00A996</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">wb-teal</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#FFFFFF" style="background-color:#FFFFFF; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.15);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#FFFFFF</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">wb-white</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#F7F8FA" style="background-color:#F7F8FA; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.12);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#F7F8FA</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">wb-gray-50</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#EEF0F3" style="background-color:#EEF0F3; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#EEF0F3</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">wb-gray-100</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#6B7280" style="background-color:#6B7280; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#6B7280</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">wb-gray-500</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#111827" style="background-color:#111827; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#111827</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">wb-gray-900</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>

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

<div style="text-align:right; margin-top:16px; margin-bottom:8px;">
  <button id="wb-export-css" style="background:#004972;color:white;border-radius:4px;padding:8px 16px;font-size:13px;font-family:'Open Sans',sans-serif;font-weight:600;border:none;cursor:pointer;margin-right:8px;">Download CSS Variables</button>
  <button id="wb-export-json" style="background:#004972;color:white;border-radius:4px;padding:8px 16px;font-size:13px;font-family:'Open Sans',sans-serif;font-weight:600;border:none;cursor:pointer;">Download JSON</button>
</div>

### Status / RAG Colors

Standard colors for risk indicators (Red-Amber-Green). These are universal alerting standards — do not modify.

<div style="display:flex; flex-wrap:wrap; gap:4px; margin:12px 0;">
  <div class="wb-swatch" data-hex="#C0392B" style="background-color:#C0392B; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#C0392B</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">rag-red</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#D35400" style="background-color:#D35400; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#D35400</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">rag-amber</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
  <div class="wb-swatch" data-hex="#27AE60" style="background-color:#27AE60; padding:12px 16px; border-radius:6px; display:inline-flex; flex-direction:column; min-width:140px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:12px;display:block;font-weight:600;">#27AE60</span>
    <span class="wb-swatch-name" style="display:block;font-size:11px;margin-top:2px;">rag-green</span>
    <span class="wb-swatch-badges" style="display:block;margin-top:6px;"></span>
  </div>
</div>

| Token | Hex | Usage |
|-------|-----|-------|
| `rag-red` | `#C0392B` | Critical / high risk |
| `rag-amber` | `#D35400` | Elevated / medium risk |
| `rag-green` | `#27AE60` | Normal / low risk |

> **Accessibility note:** `#009FDA` on white fails WCAG AA for small text (contrast ~2.7:1). Use `#009FDA` only for borders, backgrounds, icons, and large text (≥18px bold). Use `#002244` for all body text and labels.

### WB Vertical Brand Colors

The official WBG palette organized by thematic vertical. Each vertical has a base color and 9 tints (10%–90%). Use **one vertical palette only** within a given asset — do not mix palettes.

> **Data viz note:** These verticals are designed for thematic branding, not multi-category chart comparison. For charts and maps, see {doc}`data-viz`.

#### People (Yellow) — `#F7B841`

<div style="display:flex; flex-wrap:wrap; gap:2px; margin:8px 0;">
  <div class="wb-swatch" data-hex="#F7B841" style="background-color:#F7B841; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#F7B841</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">Base</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#F8BF54" style="background-color:#F8BF54; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#F8BF54</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">90%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#F9C667" style="background-color:#F9C667; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#F9C667</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">80%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#F9CD7A" style="background-color:#F9CD7A; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#F9CD7A</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">70%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#FAD48D" style="background-color:#FAD48D; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#FAD48D</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">60%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#FBDBA0" style="background-color:#FBDBA0; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#FBDBA0</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">50%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#FCE3B3" style="background-color:#FCE3B3; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#FCE3B3</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">40%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#FDEAC6" style="background-color:#FDEAC6; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#FDEAC6</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">30%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#FDF1D9" style="background-color:#FDF1D9; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#FDF1D9</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">20%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#FEF8EC" style="background-color:#FEF8EC; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#FEF8EC</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">10%</span>
    <span class="wb-swatch-badges"></span>
  </div>
</div>

#### Prosperity (Purple) — `#872C8F`

<div style="display:flex; flex-wrap:wrap; gap:2px; margin:8px 0;">
  <div class="wb-swatch" data-hex="#872C8F" style="background-color:#872C8F; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#872C8F</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">Base</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#93419A" style="background-color:#93419A; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#93419A</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">90%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#9F56A5" style="background-color:#9F56A5; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#9F56A5</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">80%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#AB6BB1" style="background-color:#AB6BB1; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#AB6BB1</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">70%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#B780BC" style="background-color:#B780BC; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#B780BC</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">60%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#C395C7" style="background-color:#C395C7; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#C395C7</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">50%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#CFABD2" style="background-color:#CFABD2; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#CFABD2</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">40%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#DBC0DD" style="background-color:#DBC0DD; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#DBC0DD</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">30%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#E7D5E9" style="background-color:#E7D5E9; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#E7D5E9</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">20%</span>
    <span class="wb-swatch-badges"></span>
  </div>
  <div class="wb-swatch" data-hex="#F3EAF4" style="background-color:#F3EAF4; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);">
    <span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#F3EAF4</span>
    <span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">10%</span>
    <span class="wb-swatch-badges"></span>
  </div>
</div>

#### Planet (Green) — `#07AB50`

<div style="display:flex; flex-wrap:wrap; gap:2px; margin:8px 0;">
  <div class="wb-swatch" data-hex="#07AB50" style="background-color:#07AB50; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#07AB50</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">Base</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#20B361" style="background-color:#20B361; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#20B361</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">90%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#39BC73" style="background-color:#39BC73; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#39BC73</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">80%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#51C484" style="background-color:#51C484; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#51C484</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">70%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#6ACD96" style="background-color:#6ACD96; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#6ACD96</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">60%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#83D5A7" style="background-color:#83D5A7; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#83D5A7</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">50%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#9CDDB9" style="background-color:#9CDDB9; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#9CDDB9</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">40%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#B5E6CA" style="background-color:#B5E6CA; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#B5E6CA</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">30%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#CDEEDC" style="background-color:#CDEEDC; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#CDEEDC</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">20%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#E6F7ED" style="background-color:#E6F7ED; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#E6F7ED</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">10%</span><span class="wb-swatch-badges"></span></div>
</div>

#### Planet / Marine (Teal) — `#009CA7`

<div style="display:flex; flex-wrap:wrap; gap:2px; margin:8px 0;">
  <div class="wb-swatch" data-hex="#009CA7" style="background-color:#009CA7; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#009CA7</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">Base</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#19A6B0" style="background-color:#19A6B0; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#19A6B0</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">90%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#33B0B9" style="background-color:#33B0B9; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#33B0B9</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">80%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#4CBAC1" style="background-color:#4CBAC1; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#4CBAC1</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">70%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#66C4CA" style="background-color:#66C4CA; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#66C4CA</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">60%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#7FCDD3" style="background-color:#7FCDD3; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#7FCDD3</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">50%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#99D7DC" style="background-color:#99D7DC; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#99D7DC</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">40%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#B2E1E4" style="background-color:#B2E1E4; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#B2E1E4</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">30%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#CCEBED" style="background-color:#CCEBED; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#CCEBED</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">20%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#E5F5F6" style="background-color:#E5F5F6; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#E5F5F6</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">10%</span><span class="wb-swatch-badges"></span></div>
</div>

#### Infrastructure (Red) — `#91302F`

<div style="display:flex; flex-wrap:wrap; gap:2px; margin:8px 0;">
  <div class="wb-swatch" data-hex="#91302F" style="background-color:#91302F; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#91302F</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">Base</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#9C4544" style="background-color:#9C4544; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#9C4544</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">90%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#A75959" style="background-color:#A75959; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#A75959</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">80%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#B26E6D" style="background-color:#B26E6D; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#B26E6D</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">70%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#BD8382" style="background-color:#BD8382; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#BD8382</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">60%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#C89797" style="background-color:#C89797; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#C89797</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">50%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#D3ACAC" style="background-color:#D3ACAC; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#D3ACAC</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">40%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#DEC1C1" style="background-color:#DEC1C1; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#DEC1C1</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">30%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#E9D6D5" style="background-color:#E9D6D5; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#E9D6D5</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">20%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#F4EAEA" style="background-color:#F4EAEA; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#F4EAEA</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">10%</span><span class="wb-swatch-badges"></span></div>
</div>

#### Digital (Gray) — `#5D6472`

<div style="display:flex; flex-wrap:wrap; gap:2px; margin:8px 0;">
  <div class="wb-swatch" data-hex="#5D6472" style="background-color:#5D6472; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#5D6472</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">Base</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#6B7481" style="background-color:#6B7481; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#6B7481</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">90%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#7C848F" style="background-color:#7C848F; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#7C848F</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">80%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#8C939D" style="background-color:#8C939D; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#8C939D</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">70%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#9DA3AB" style="background-color:#9DA3AB; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#9DA3AB</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">60%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#ADB2B9" style="background-color:#ADB2B9; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#ADB2B9</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">50%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#BDC1C7" style="background-color:#BDC1C7; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#BDC1C7</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">40%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#CED1D5" style="background-color:#CED1D5; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#CED1D5</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">30%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#DEE0E3" style="background-color:#DEE0E3; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#DEE0E3</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">20%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#EFF0F1" style="background-color:#EFF0F1; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#EFF0F1</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">10%</span><span class="wb-swatch-badges"></span></div>
</div>

#### Corporate / Knowledge Management (Navy) — `#004972`

<div style="display:flex; flex-wrap:wrap; gap:2px; margin:8px 0;">
  <div class="wb-swatch" data-hex="#004972" style="background-color:#004972; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#004972</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">Base</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#195B80" style="background-color:#195B80; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#195B80</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">90%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#336D8E" style="background-color:#336D8E; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#336D8E</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">80%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#4C809C" style="background-color:#4C809C; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#4C809C</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">70%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#6692AA" style="background-color:#6692AA; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#6692AA</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">60%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#80A4B8" style="background-color:#80A4B8; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#80A4B8</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">50%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#99B6C7" style="background-color:#99B6C7; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#99B6C7</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">40%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#B2C8D5" style="background-color:#B2C8D5; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#B2C8D5</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">30%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#CCDBE3" style="background-color:#CCDBE3; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#CCDBE3</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">20%</span><span class="wb-swatch-badges"></span></div>
  <div class="wb-swatch" data-hex="#E5EDF1" style="background-color:#E5EDF1; padding:8px 10px; border-radius:4px; display:inline-flex; flex-direction:column; min-width:75px; cursor:pointer; position:relative; box-shadow:inset 0 0 0 1px rgba(0,0,0,0.10);"><span class="wb-swatch-hex" style="font-family:monospace;font-size:10px;display:block;font-weight:600;">#E5EDF1</span><span class="wb-swatch-name" style="display:block;font-size:9px;margin-top:2px;">10%</span><span class="wb-swatch-badges"></span></div>
</div>

### Color Rules

- Use **one vertical palette** per product/asset
- Never mix vertical palettes
- Tint usage: Base → primary elements; 70–90% → secondary; 10–40% → backgrounds
- Do not create custom colors outside this system
- No gradients on UI chrome (gradients are for data viz only — choropleths, heatmaps)

---

## Typography

WB typography standards for digital dashboards. Source: WBG Digital Look & Feel Style Guide.

### Font Families

| Role | Family | Where to Get |
|------|--------|-------------|
| Primary (global) | **Open Sans** | [Google Fonts](https://fonts.google.com/specimen/Open+Sans) / Adobe Fonts |
| Arabic support | **Noto Sans Arabic** | [Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans+Arabic) / Adobe Fonts |
| Monospace (data values) | **Geist Mono** | Next.js default — keep for numbers, codes, data values |

Open Sans has extended character support including accented characters (àåéîõǿü) and is the standard across all WBG digital products.

#### Loading in Next.js

```typescript
// app/layout.tsx
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
});
```

**Do not load fonts from a CDN.** Use `next/font/google` for performance and privacy.

### Type Scale (Dashboard)

| Role | Size | Weight | Color | Usage |
|------|------|--------|-------|-------|
| Page title | 18px | 700 | white | Top nav bar title |
| Section heading | 15px | 700 | `wb-gray-900` | Card headers, panel titles |
| KPI value | 24px | 700 | `wb-gray-900` | Big numbers |
| Label / caps | 10px | 600 | `wb-gray-500` | KPI titles (uppercase, tracked) |
| Body | 14px | 400 | `wb-gray-900` | Table rows, descriptions |
| Meta / caption | 12px | 400 | `wb-gray-500` | Source attribution, dates |
| Sidebar nav | 14px | 500 | white / 80% | Navigation items |
| Sidebar section | 10px | 600 | white / 40% | Section labels (uppercase) |

### Usage Rules

- **Headings:** Bold (700)
- **Subheadings:** Medium (600)
- **Body:** Regular (400)
- Avoid stylization or decorative typefaces — Open Sans only
- All-caps labels should use letter-spacing for readability (`letter-spacing: 0.08em`)
- Do not use `#009FDA` (WB Blue) for small body text — contrast fails WCAG AA. Use `#002244` or `#111827` for readable text

### General WBG Principles

- Minimal, clean, and structured
- Strong hierarchy and readability
- Institutional, not decorative
- Professional tone — avoid marketing copy; labels should be operational

---

## Layout & Spacing

Layout patterns and spacing standards for WB dashboards.

### Spacing Scale

Base unit: **4px**

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight internal padding |
| `sm` | 8px | Component inner spacing |
| `md` | 16px | Standard spacing |
| `lg` | 24px | Section spacing, main content padding |
| `xl` | 32px | Large gaps, panel padding |
| `2xl` | 48px | Page-level spacing |

### Dashboard Shell

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

**Nav Bar (56px)**
- Background: `#002244`
- Left: WB globe mark + "WORLD BANK" (Open Sans 600, 11px, white, letter-spacing: 0.1em)
- Center/Left: Dashboard title (Open Sans 700, 18px, white)
- Right: Status badge or controls
- Border-bottom: `1px solid rgba(255,255,255,0.12)`

**Sidebar (224px)**
- Background: `#002244`
- Active nav item: `#009FDA` background, white text
- Hover: `rgba(255,255,255,0.10)`
- Section labels: white/40%, 10px, 600, uppercase
- Nav item text: white/80% inactive, white active
- Footer: data source credits + date range (white/40%, 12px)

**Main Content**
- Background: `#F7F8FA`
- Max-width: 1400px
- Padding: 24px

### Responsive Breakpoints

This is primarily a **desktop tool** — dashboards are for analysts and program managers, not mobile users.

| Breakpoint | Sidebar | Content | Priority |
|------------|---------|---------|----------|
| ≥1280px | 224px fixed | Full layout | Primary target |
| 1024–1280px | 224px fixed | Slightly tighter | Secondary |
| 768–1024px | Collapsible (hamburger) | Full content | Tertiary |
| <768px | Hidden (drawer) | Single column | Not a priority |

### Content Layout Patterns

**KPI Strip** — 5 cards in a row, white background, `#009FDA` left-border accent (4px). One "feature" card (solid `#002244`, white text) for the primary metric.

**Card Grid** — Standard: 3-column on ≥1280px, 2-column on 1024–1280px, 1-column on mobile.

**Full-Width Sections** — Maps and wide charts should be full-width within the content area. Use `border-radius: 8px` and `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` on card containers.

### WBG Composition Principles

- Clean, minimal composition
- Strong focal point
- Clear hierarchy: Title → Visual → Supporting text
- White space is authority — when in doubt, subtract

---

## Components

Dashboard component patterns for WB data products.

### WB Nav Bar

```
+-----------------------------------------------------------------+
| ○◐  WORLD BANK  |  [Dashboard Title]             [Status Badge]|
+-----------------------------------------------------------------+
  wb-navy bg        Open Sans 700, white 18px       right-aligned
  Globe mark 16px
  "WORLD BANK"
  Open Sans 600, 11px, white, letter-spacing: 0.08em
```

**Specs:** Height 56px · Background `#002244` · Border-bottom `1px solid rgba(255,255,255,0.12)`

### Sidebar

- Width: 224px · Background: `#002244`
- Active item: `background: #009FDA`, white text
- Hover: `background: rgba(255,255,255,0.10)`
- Section labels: white/40%, 10px, 600, uppercase
- Footer: data source credits + date range, white/40%, 12px

### KPI Card

**Default variant** — Background white · Left border `4px solid #009FDA` · Title 10px/600/`#6B7280` uppercase · Value 24px/700/`#111827`

**Feature variant** — Background `#002244` (navy) · Text white · Use for one card per strip (the primary metric)

### Data Table

- Header: `#EEF0F3` background, 12px/600/`#6B7280` uppercase
- Row height: 40px minimum · Body text: 14px/400/`#111827`
- Alternating rows: white / `#F7F8FA`
- Subtle row dividers only (`1px solid #EEF0F3`) — no heavy borders
- Sortable columns: active sort in `#009FDA`

### Filter Bar

- Input height: 36px · Background white · Border `1px solid #EEF0F3`
- Focus border: `#009FDA`
- Button (apply/reset): `#009FDA` fill, white text, 14px/600

### Map Container

- Background white · `border-radius: 8px` · `box-shadow: 0 1px 3px rgba(0,0,0,0.08)`
- Legend: bottom-left or bottom-right, white background, 12px text
- Include a visually-hidden "Skip to data table" link for accessibility

### Chart Container

- White background · `border-radius: 8px` · subtle shadow
- Chart title: 15px/700/`#111827`, above the chart
- Gridlines: dashed, `#EEF0F3`, low opacity

### Interaction States

| Component | Loading | Empty | Error |
|-----------|---------|-------|-------|
| Map | Region pulse shimmer | "No data in selected period" | "Map data unavailable" overlay |
| KPI strip | Skeleton cards | Show "–" with tooltip | Last-known value + "stale data" label |
| Data table | Skeleton rows | "No records in this period" | Retry button |
| Chart | Skeleton | "No data" message | Inline error with retry |

### What NOT to Do

- No gradients on UI chrome
- No decorative frames or borders around content cards
- No marketing copy — labels should be operational
- No loading spinners where skeleton loaders are possible
- Do not load fonts from an external CDN

### WB Logo Treatment

```
○◐  WORLD BANK
```

Globe SVG (self-contained):

```xml
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="9" stroke="white" stroke-width="1.5"/>
  <path d="M10 1 C7 4 7 16 10 19" stroke="white" stroke-width="1.5"/>
  <path d="M10 1 C13 4 13 16 10 19" stroke="white" stroke-width="1.5"/>
  <path d="M1 10 H19" stroke="white" stroke-width="1.5"/>
  <path d="M2 6 H18 M2 14 H18" stroke="white" stroke-width="1"/>
</svg>
```

"WORLD BANK" text: Open Sans 600, 11px, white, `letter-spacing: 0.1em`, all caps
