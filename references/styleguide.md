# 🌍 World Bank Digital Style Guide (Prompt-Ready)

> Source: WBG Digital Look & Feel Style Guide + Branding Guidelines 
> This file is optimized for **AI prompt engineering, design systems, and geospatial workflows**

---

# 1. 🎨 Core Design Principles

* Minimal, clean, and structured
* Human-centered + data-driven
* Strong hierarchy and readability
* Institutional, not decorative

**Tone:**

* Professional
* Evidence-based
* Clear and concise

---

# 2. 🔤 Typography

## Primary Fonts

* `Open Sans` (global default)
* `Noto Sans Arabic` (Arabic support)

## Usage

* Headings: Bold
* Subheadings: Medium
* Body: Regular
* Avoid stylization or decorative fonts

---

# 3. 🎨 Color System (Full Palette + Tints)

## 🟡 People (Yellow)

* Base: `#F7B841`
* 90%: `#F8BF54`
* 80%: `#F9C667`
* 70%: `#F9CD7A`
* 60%: `#FAD48D`
* 50%: `#FBDBA0`
* 40%: `#FCE3B3`
* 30%: `#FDEAC6`
* 20%: `#FDF1D9`
* 10%: `#FEF8EC`

---

## 🟣 Prosperity (Purple)

* Base: `#872C8F`
* 90%: `#93419A`
* 80%: `#9F56A5`
* 70%: `#AB6BB1`
* 60%: `#B780BC`
* 50%: `#C395C7`
* 40%: `#CFABD2`
* 30%: `#DBC0DD`
* 20%: `#E7D5E9`
* 10%: `#F3EAF4`

---

## 🟢 Planet (Green)

* Base: `#07AB50`
* 90%: `#20B361`
* 80%: `#39BC73`
* 70%: `#51C484`
* 60%: `#6ACD96`
* 50%: `#83D5A7`
* 40%: `#9CDDB9`
* 30%: `#B5E6CA`
* 20%: `#CDEEDC`
* 10%: `#E6F7ED`

---

## 🔵 Planet (Marine / Teal)

* Base: `#009CA7`
* 90%: `#19A6B0`
* 80%: `#33B0B9`
* 70%: `#4CBAC1`
* 60%: `#66C4CA`
* 50%: `#7FCDD3`
* 40%: `#99D7DC`
* 30%: `#B2E1E4`
* 20%: `#CCEBED`
* 10%: `#E5F5F6`

---

## 🔴 Infrastructure (Red)

* Base: `#91302F`
* 90%: `#9C4544`
* 80%: `#A75959`
* 70%: `#B26E6D`
* 60%: `#BD8382`
* 50%: `#C89797`
* 40%: `#D3ACAC`
* 30%: `#DEC1C1`
* 20%: `#E9D6D5`
* 10%: `#F4EAEA`

---

## ⚙️ Digital (Gray)

* Base: `#5D6472`
* 90%: `#6B7481`
* 80%: `#7C848F`
* 70%: `#8C939D`
* 60%: `#9DA3AB`
* 50%: `#ADB2B9`
* 40%: `#BDC1C7`
* 30%: `#CED1D5`
* 20%: `#DEE0E3`
* 10%: `#EFF0F1`

---

## 🔷 Corporate / Knowledge Management (Blue)

* Base: `#004972`
* 90%: `#195B80`
* 80%: `#336D8E`
* 70%: `#4C809C`
* 60%: `#6692AA`
* 50%: `#80A4B8`
* 40%: `#99B6C7`
* 30%: `#B2C8D5`
* 20%: `#CCDBE3`
* 10%: `#E5EDF1`

---

# 4. 🎯 Color Rules

* Use **ONE vertical palette only**
* Never mix palettes
* Use:

  * Base → primary elements
  * 70–90% → secondary
  * 10–40% → backgrounds
* Do NOT invent new colors

---

# 5. 🧩 Graphic Language

## Core Elements

* Circular motifs (full / half / quarter)
* Brushstroke accents

## Usage

* Subtle emphasis only
* Use opacity / blending
* Avoid heavy or distracting overlays

---

# 6. 🧱 Layout System

* Clean, minimal composition
* Strong focal point
* Clear hierarchy:

  * Title → Visual → Supporting text
* Edge-to-edge imagery preferred

---

# 7. ✅ Do / ❌ Don’t

## ✅ DO

* Use consistent palette
* Keep layouts simple
* Use subtle graphic elements
* Maintain readability

## ❌ DON’T

* Mix color palettes
* Add frames/borders unnecessarily
* Overcrowd designs
* Create custom palettes

---

# 8. 🤖 Prompt Engineering Template

## Base Prompt Structure

```
Style: World Bank digital style, clean, minimal, professional
Typography: Open Sans, modern sans-serif
Color scheme: [SELECT ONE vertical palette]
Composition: simple, strong hierarchy, no clutter
Graphics: subtle circular or brushstroke elements
Tone: authoritative, data-driven, human-centered
Constraints: no mixed colors, no decorative styling
```

---

## Example

```
Create a clean, professional visualization in World Bank style.
Use Corporate blue palette (#004972 with lighter tints).
Minimalist layout with strong hierarchy.
Typography similar to Open Sans.
Subtle circular or brushstroke accents.
No clutter, borders, or mixed palettes.
Tone should be institutional and data-driven.
```

---

# 9. ⚡ Quick Checklist

* [ ] Single palette used
* [ ] Clean layout
* [ ] Proper tint hierarchy
* [ ] Open Sans style typography
* [ ] Minimal graphic accents
* [ ] No clutter or borders
* [ ] Professional tone

---

# 10. 🔑 Key Principle

> Minimal + Structured + Human-Centered + Data-Driven

---

# 11. 💡 Implementation Notes (for Dev / GIS)

* Use as:

  * Prompt prefix in LLM pipelines
  * Styling config for AGOL layers
  * JSON/YAML theme definitions
* Map tints → symbology classes (e.g., choropleths)

---
