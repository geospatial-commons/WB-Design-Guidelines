# Typography

WB typography standards for digital dashboards. Source: WBG Digital Look & Feel Style Guide.

---

## Font Families

| Role | Family | Where to Get |
|------|--------|-------------|
| Primary (global) | **Open Sans** | [Google Fonts](https://fonts.google.com/specimen/Open+Sans) / Adobe Fonts |
| Arabic support | **Noto Sans Arabic** | [Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans+Arabic) / Adobe Fonts |
| Monospace (data values) | **Geist Mono** | Next.js default — keep for numbers, codes, data values |

Open Sans has extended character support including accented characters (àåéîõǿü) and is the standard across all WBG digital products.

### Loading in Next.js

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

---

## Type Scale (Dashboard)

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

---

## Usage Rules

- **Headings:** Bold (700)
- **Subheadings:** Medium (600)
- **Body:** Regular (400)
- Avoid stylization or decorative typefaces — Open Sans only
- All-caps labels should use letter-spacing for readability (`letter-spacing: 0.08em`)
- Do not use `#009FDA` (WB Blue) for small body text — contrast fails WCAG AA. Use `#002244` or `#111827` for readable text

---

## General WBG Principles

- Minimal, clean, and structured
- Strong hierarchy and readability
- Institutional, not decorative
- Professional tone — avoid marketing copy; labels should be operational
