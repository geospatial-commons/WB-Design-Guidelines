# WB Logos

Official World Bank Group logo assets. Source: WBG Brand Guidelines (see [`../../references/WBG_BrandGuidelines.pdf`](../../references/WBG_BrandGuidelines.pdf)).

Only PNG exports are stored here. For print production (`.ai`, `.eps`, `.tif`), refer to the original brand package.

---

## Structure

```
wb-logos/
├── vertical/     ← Globe + "THE WORLD BANK" stacked
│   ├── color/
│   ├── white/
│   ├── black/
│   └── grayscale/
├── horizontal/   ← Globe + "THE WORLD BANK" side by side
│   ├── color/
│   ├── white/    ← includes gradient (preferred) and solid white variants
│   ├── black/
│   └── grayscale/
└── globe/        ← Globe mark only, no text
    ├── color/
    ├── white/    ← includes gradient (preferred) and solid white variants
    ├── black/
    └── grayscale/
```

Each color folder contains 3 resolution variants:
- `*-web.png` — screen / low-res (smallest file)
- `*.png` — standard
- `*-high.png` — high resolution (largest file, for presentations)

---

## Which Logo to Use

| Use case | Recommended |
|----------|-------------|
| Dark backgrounds (navy, blue) | `white/` → gradient variant (`*_gradient*.png`) |
| Light backgrounds | `color/` |
| Print / one-color | `black/` or `grayscale/` |
| Logo mark only (favicon, avatar) | `globe/color/` or `globe/white/` |
| Dashboard nav bar | `globe/white/WBG_Globe-White_gradient-web.png` |

**Note:** The gradient white variant is the WBG-preferred treatment for white logos on dark backgrounds.

---

## File Naming

Files follow the official WBG naming convention:

- `WB-WBG-vertical-RGB.png` / `WBG_Horizontal-RGB.png` / `WBG_Globe-RGB.png`
- `-web` suffix = web-optimized (smaller)
- `-high` suffix = high-resolution
- `-CMYK` / `-RGB` distinguishes color space (only RGB versions are included here — for print CMYK, use the source `.tif` files)
- `_gradient` = gradient white variant (preferred over solid white per WBG guidelines)
