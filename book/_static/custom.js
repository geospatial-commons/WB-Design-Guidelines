/**
 * WB Design Guidelines — custom.js
 * Provides: WCAG contrast badges, click-to-copy hex, token export, back-to-top
 */

/* ─────────────────────────────────────────────
   TOKEN DATA
   ───────────────────────────────────────────── */
window.WB_TOKENS = {
  /* Core Dashboard Palette */
  "wb-blue": "#009FDA",
  "wb-navy": "#002244",
  "wb-teal": "#00A996",
  "wb-white": "#FFFFFF",
  "wb-gray-50": "#F7F8FA",
  "wb-gray-100": "#EEF0F3",
  "wb-gray-500": "#6B7280",
  "wb-gray-900": "#111827",
  /* RAG */
  "rag-red": "#C0392B",
  "rag-amber": "#D35400",
  "rag-green": "#27AE60",
  /* People (Yellow) */
  "wb-people": "#F7B841",
  "wb-people-90": "#F8BF54",
  "wb-people-80": "#F9C667",
  "wb-people-70": "#F9CD7A",
  "wb-people-60": "#FAD48D",
  "wb-people-50": "#FBDBA0",
  "wb-people-40": "#FCE3B3",
  "wb-people-30": "#FDEAC6",
  "wb-people-20": "#FDF1D9",
  "wb-people-10": "#FEF8EC",
  /* Prosperity (Purple) */
  "wb-prosperity": "#872C8F",
  "wb-prosperity-90": "#93419A",
  "wb-prosperity-80": "#9F56A5",
  "wb-prosperity-70": "#AB6BB1",
  "wb-prosperity-60": "#B780BC",
  "wb-prosperity-50": "#C395C7",
  "wb-prosperity-40": "#CFABD2",
  "wb-prosperity-30": "#DBC0DD",
  "wb-prosperity-20": "#E7D5E9",
  "wb-prosperity-10": "#F3EAF4",
  /* Planet (Green) */
  "wb-planet": "#07AB50",
  "wb-planet-90": "#20B361",
  "wb-planet-80": "#39BC73",
  "wb-planet-70": "#51C484",
  "wb-planet-60": "#6ACD96",
  "wb-planet-50": "#83D5A7",
  "wb-planet-40": "#9CDDB9",
  "wb-planet-30": "#B5E6CA",
  "wb-planet-20": "#CDEEDC",
  "wb-planet-10": "#E6F7ED",
  /* Planet / Marine (Teal) */
  "wb-marine": "#009CA7",
  "wb-marine-90": "#19A6B0",
  "wb-marine-80": "#33B0B9",
  "wb-marine-70": "#4CBAC1",
  "wb-marine-60": "#66C4CA",
  "wb-marine-50": "#7FCDD3",
  "wb-marine-40": "#99D7DC",
  "wb-marine-30": "#B2E1E4",
  "wb-marine-20": "#CCEBED",
  "wb-marine-10": "#E5F5F6",
  /* Infrastructure (Red) */
  "wb-infrastructure": "#91302F",
  "wb-infrastructure-90": "#9C4544",
  "wb-infrastructure-80": "#A75959",
  "wb-infrastructure-70": "#B26E6D",
  "wb-infrastructure-60": "#BD8382",
  "wb-infrastructure-50": "#C89797",
  "wb-infrastructure-40": "#D3ACAC",
  "wb-infrastructure-30": "#DEC1C1",
  "wb-infrastructure-20": "#E9D6D5",
  "wb-infrastructure-10": "#F4EAEA",
  /* Digital (Gray) */
  "wb-digital": "#5D6472",
  "wb-digital-90": "#6B7481",
  "wb-digital-80": "#7C848F",
  "wb-digital-70": "#8C939D",
  "wb-digital-60": "#9DA3AB",
  "wb-digital-50": "#ADB2B9",
  "wb-digital-40": "#BDC1C7",
  "wb-digital-30": "#CED1D5",
  "wb-digital-20": "#DEE0E3",
  "wb-digital-10": "#EFF0F1",
  /* Corporate / Knowledge Management (Navy) */
  "wb-corporate": "#004972",
  "wb-corporate-90": "#195B80",
  "wb-corporate-80": "#336D8E",
  "wb-corporate-70": "#4C809C",
  "wb-corporate-60": "#6692AA",
  "wb-corporate-50": "#80A4B8",
  "wb-corporate-40": "#99B6C7",
  "wb-corporate-30": "#B2C8D5",
  "wb-corporate-20": "#CCDBE3",
  "wb-corporate-10": "#E5EDF1"
};

/* ─────────────────────────────────────────────
   WCAG CONTRAST UTILITIES
   ───────────────────────────────────────────── */

function parseHex(hex) {
  var h = hex.replace(/^#/, '');
  if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16)
  ];
}

function toLinear(c) {
  c = c / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function relativeLuminance(rgb) {
  var r = toLinear(rgb[0]);
  var g = toLinear(rgb[1]);
  var b = toLinear(rgb[2]);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(hex1, hex2) {
  var L1 = relativeLuminance(parseHex(hex1));
  var L2 = relativeLuminance(parseHex(hex2));
  var lighter = Math.max(L1, L2);
  var darker  = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

/* ─────────────────────────────────────────────
   SWATCH INIT (badges + copy + a11y)
   ───────────────────────────────────────────── */

function badgeLabel(ratio) {
  if (ratio >= 7)   return 'AAA ✓';
  if (ratio >= 4.5) return 'AA ✓';
  return 'Fail ✗';
}

function badgeColor(ratio) {
  if (ratio >= 4.5) return '#1a5c1a';
  return '#8B0000';
}

function initSwatches() {
  var swatches = document.querySelectorAll('.wb-swatch');
  swatches.forEach(function(el) {
    /* ── Read hex value ── */
    var hex = el.getAttribute('data-hex') || '';
    if (!hex) {
      var hexSpan = el.querySelector('.wb-swatch-hex');
      if (hexSpan) hex = hexSpan.textContent.trim();
    }
    if (!hex || !hex.match(/^#[0-9A-Fa-f]{3,6}$/)) return;

    /* ── Auto light/dark text ── */
    var lum = relativeLuminance(parseHex(hex));
    var textColor = lum > 0.179 ? '#111827' : '#ffffff';
    el.style.color = textColor;

    /* ── WCAG badges ── */
    var badgesEl = el.querySelector('.wb-swatch-badges');
    if (badgesEl) {
      var ratioWhite = contrastRatio(hex, '#FFFFFF');
      var ratioNavy  = contrastRatio(hex, '#002244');

      var labelW = badgeLabel(ratioWhite);
      var labelN = badgeLabel(ratioNavy);

      var spanW = document.createElement('span');
      spanW.setAttribute('aria-label',
        'Contrast ratio ' + ratioWhite.toFixed(1) + ':1, ' +
        (ratioWhite >= 4.5 ? 'passes' : 'fails') + ' WCAG AA for text on white');
      spanW.style.cssText = [
        'display:inline-block',
        'font-size:9px',
        'font-family:monospace',
        'font-weight:700',
        'padding:1px 4px',
        'border-radius:3px',
        'margin-right:3px',
        'background:rgba(255,255,255,0.20)',
        'color:' + (lum > 0.179 ? '#111827' : '#ffffff')
      ].join(';');
      spanW.textContent = 'white: ' + labelW;

      var spanN = document.createElement('span');
      spanN.setAttribute('aria-label',
        'Contrast ratio ' + ratioNavy.toFixed(1) + ':1, ' +
        (ratioNavy >= 4.5 ? 'passes' : 'fails') + ' WCAG AA for text on navy');
      spanN.style.cssText = spanW.style.cssText;
      spanN.textContent = 'navy: ' + labelN;

      badgesEl.appendChild(spanW);
      badgesEl.appendChild(spanN);
    }

    /* ── Keyboard accessibility ── */
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', 'Copy ' + hex);

    /* ── Click-to-copy ── */
    function doCopy() {
      var promise;
      try {
        promise = navigator.clipboard.writeText(hex);
      } catch(e) {
        promise = null;
      }

      function showTooltip() {
        var tip = document.createElement('span');
        tip.className = 'wb-tooltip';
        tip.textContent = 'Copied!';
        tip.style.cssText = [
          'position:absolute',
          'bottom:calc(100% + 6px)',
          'left:50%',
          'transform:translateX(-50%)',
          'background:#004972',
          'color:white',
          'border-radius:4px',
          'padding:4px 8px',
          'font-size:11px',
          'white-space:nowrap',
          'pointer-events:none',
          'z-index:100',
          'opacity:1',
          'transition:opacity 300ms'
        ].join(';');
        el.appendChild(tip);
        setTimeout(function() { tip.style.opacity = '0'; }, 1200);
        setTimeout(function() { if (tip.parentNode) tip.parentNode.removeChild(tip); }, 1500);
      }

      if (promise) {
        promise.then(showTooltip).catch(function() {
          /* Clipboard API denied — try execCommand fallback */
          try {
            var ta = document.createElement('textarea');
            ta.value = hex;
            ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showTooltip();
          } catch(e2) { /* fail silently */ }
        });
      } else {
        /* No clipboard API (very old browser) — execCommand fallback */
        try {
          var ta = document.createElement('textarea');
          ta.value = hex;
          ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          showTooltip();
        } catch(e3) { /* fail silently */ }
      }
    }

    el.addEventListener('click', doCopy);
    el.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        doCopy();
      }
    });
  });
}

/* ─────────────────────────────────────────────
   TOKEN EXPORT BUTTONS
   ───────────────────────────────────────────── */

function initExportButtons() {
  var tokens = window.WB_TOKENS || {};

  var btnCss = document.getElementById('wb-export-css');
  if (btnCss) {
    btnCss.addEventListener('mouseenter', function() { this.style.background = '#195B80'; });
    btnCss.addEventListener('mouseleave', function() { this.style.background = '#004972'; });
    btnCss.addEventListener('click', function() {
      var lines = [':root {'];
      Object.keys(tokens).forEach(function(k) {
        lines.push('  --' + k + ': ' + tokens[k] + ';');
      });
      lines.push('}');
      var blob = new Blob([lines.join('\n')], { type: 'text/css' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = 'wb-tokens.css';
      document.body.appendChild(a); a.click();
      document.body.removeChild(a);
      setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
    });
  }

  var btnJson = document.getElementById('wb-export-json');
  if (btnJson) {
    btnJson.addEventListener('mouseenter', function() { this.style.background = '#195B80'; });
    btnJson.addEventListener('mouseleave', function() { this.style.background = '#004972'; });
    btnJson.addEventListener('click', function() {
      var blob = new Blob([JSON.stringify(tokens, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = 'wb-tokens.json';
      document.body.appendChild(a); a.click();
      document.body.removeChild(a);
      setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
    });
  }
}

/* ─────────────────────────────────────────────
   BACK-TO-TOP BUTTON
   ───────────────────────────────────────────── */

function initBackToTop() {
  var btn = document.createElement('button');
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  btn.style.cssText = [
    'position:fixed',
    'bottom:24px',
    'right:24px',
    'background:#004972',
    'color:white',
    'border:none',
    'border-radius:50%',
    'width:40px',
    'height:40px',
    'font-size:18px',
    'cursor:pointer',
    'display:none',
    'align-items:center',
    'justify-content:center',
    'z-index:1000',
    'box-shadow:0 2px 8px rgba(0,0,0,0.25)',
    'transition:background 200ms'
  ].join(';');

  btn.addEventListener('mouseenter', function() { this.style.background = '#195B80'; });
  btn.addEventListener('mouseleave', function() { this.style.background = '#004972'; });
  btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    btn.style.display = window.scrollY > 500 ? 'flex' : 'none';
  });
}

/* ─────────────────────────────────────────────
   SELF-TESTS (file:// preview only)
   ───────────────────────────────────────────── */

function runSelfTests() {
  if (window.location.protocol !== 'file:') return;
  console.assert(Math.round(contrastRatio('#FFFFFF', '#000000')) === 21, 'Max contrast check');
  console.assert(contrastRatio('#009FDA', '#FFFFFF') < 3, '#009FDA should fail AA on white');
  console.assert(contrastRatio('#002244', '#FFFFFF') > 7, '#002244 should pass AAA on white');
}

/* ─────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function() {
  initSwatches();
  initExportButtons();
  initBackToTop();
  runSelfTests();
});
