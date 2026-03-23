/* =============================================================
   WB Palette Picker — Interactive Logic
   Vanilla JS, no external dependencies.
   Only initialises on pages containing #palette-picker-root.
   ============================================================= */

(function () {
  'use strict';

  // ============================================================
  // PALETTE DATA
  // ============================================================
  var WB_PALETTES = [
    {
      id: 'wb-categorical',
      name: 'WB Categorical',
      type: 'categorical',
      colorblindSafe: true,
      usage: 'Named groups in bar, line, or pie charts. Use colors in order; limit to 4 for clarity.',
      colors: [
        { name: 'WB Navy',           hex: '#002244' },
        { name: 'WB Blue',           hex: '#009FDA' },
        { name: 'People Yellow',     hex: '#F7B841' },
        { name: 'Prosperity Purple', hex: '#872C8F' },
        { name: 'WB Teal',           hex: '#00A996' },
        { name: 'Infrastructure Red',hex: '#91302F' }
      ]
    },
    {
      id: 'uk-categorical',
      name: 'Alternative Categorical',
      type: 'categorical',
      colorblindSafe: true,
      usage: 'UK Government Analysis Function palette — institutional dashboards requiring highest colorblind safety and greyscale legibility. Use in order; limit to 4.',
      colors: [
        { name: 'Dark blue',    hex: '#12436D' },
        { name: 'Turquoise',    hex: '#28A197' },
        { name: 'Dark pink',    hex: '#801650' },
        { name: 'Orange',       hex: '#F46A25' },
        { name: 'Dark grey',    hex: '#3D3D3D' },
        { name: 'Light purple', hex: '#A285D1' }
      ]
    },
    {
      id: 'wb-duo',
      name: 'WB Duo',
      type: 'categorical',
      colorblindSafe: true,
      usage: 'Two-series charts requiring maximum contrast. Use WB Navy as the primary series.',
      colors: [
        { name: 'WB Navy',       hex: '#002244' },
        { name: 'People Yellow', hex: '#F7B841' }
      ]
    },
    {
      id: 'wb-sequential-blue',
      name: 'WB Blue Sequential',
      type: 'sequential',
      colorblindSafe: true,
      usage: 'Ordered data, intensity, or magnitude — choropleth maps, heatmaps. Light = low, dark = high.',
      colors: [
        { name: 'Blue 1 (lightest)', hex: '#E8F5FC' },
        { name: 'Blue 2',           hex: '#7DCFED' },
        { name: 'Blue 3 (mid)',      hex: '#009FDA' },
        { name: 'Blue 4',           hex: '#005F8A' },
        { name: 'Blue 5 (darkest)', hex: '#002244' }
      ]
    },
    {
      id: 'wb-sequential-teal',
      name: 'WB Teal Sequential',
      type: 'sequential',
      colorblindSafe: true,
      usage: 'Ordered data as an alternative to the blue ramp. Use when blue is already in use for a categorical series.',
      colors: [
        { name: 'Teal 1 (lightest)', hex: '#E6F7F5' },
        { name: 'Teal 2',           hex: '#7DD5CB' },
        { name: 'Teal 3 (mid)',      hex: '#00A996' },
        { name: 'Teal 4',           hex: '#007A6E' },
        { name: 'Teal 5 (darkest)', hex: '#003D38' }
      ]
    },
    {
      id: 'wb-diverging-blue-yellow',
      name: 'WB Blue–Yellow Diverging',
      type: 'diverging',
      colorblindSafe: true,
      usage: 'Data with a meaningful midpoint — e.g. above/below average, positive/negative change. Neutral midpoint is near-white.',
      colors: [
        { name: 'Negative strong', hex: '#002244' },
        { name: 'Negative mid',   hex: '#336D8E' },
        { name: 'Negative light', hex: '#99B6C7' },
        { name: 'Neutral',        hex: '#F7F8FA' },
        { name: 'Positive light', hex: '#FCE3B3' },
        { name: 'Positive mid',   hex: '#F9CD7A' },
        { name: 'Positive strong',hex: '#F7B841' }
      ]
    },
    {
      id: 'wb-focus',
      name: 'WB Focus / Highlight',
      type: 'categorical',
      colorblindSafe: true,
      usage: 'Highlight a single data point or series. Active color draws attention; grey recedes all other elements.',
      colors: [
        { name: 'Active',     hex: '#009FDA' },
        { name: 'Background', hex: '#BFBFBF' }
      ]
    }
  ];

  // ============================================================
  // BAR HEIGHTS — varied for visual interest in mini charts
  // ============================================================
  var BAR_HEIGHTS = [75, 55, 90, 40, 70, 50];

  // ============================================================
  // CLIPBOARD
  // ============================================================
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for local file:// builds
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    return Promise.resolve();
  }

  // ============================================================
  // TOAST
  // ============================================================
  var toastTimer = null;
  function showToast(msg) {
    var toast = document.getElementById('pp-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('pp-toast-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('pp-toast-visible');
    }, 1500);
  }

  // ============================================================
  // CODE SNIPPET GENERATION
  // ============================================================
  function hexList(palette) {
    return palette.colors.map(function (c) { return c.hex; });
  }

  function generateSnippets(palette) {
    var hexes = hexList(palette);
    var hexPyList = '[\n    ' + hexes.map(function (h) { return '"' + h + '"'; }).join(',\n    ') + '\n]';
    var hexRVec = 'c(' + hexes.map(function (h) { return '"' + h + '"'; }).join(', ') + ')';
    var cssVars = hexes.map(function (h, i) { return '  --wb-color-' + (i + 1) + ': ' + h + ';'; }).join('\n');

    var plotlySnippet, mplSnippet, ggplotSnippet, cssSnippet;

    if (palette.type === 'categorical') {
      plotlySnippet =
        'WB_PALETTE = ' + hexPyList + '\n\n' +
        '# Plotly Express — categorical colors\n' +
        'import plotly.express as px\n' +
        'fig = px.bar(\n' +
        '    df, x="category", y="value",\n' +
        '    color="group",\n' +
        '    color_discrete_sequence=WB_PALETTE\n' +
        ')';

      mplSnippet =
        'import matplotlib.pyplot as plt\n\n' +
        'WB_PALETTE = ' + hexPyList + '\n\n' +
        '# Apply as color cycle\n' +
        'plt.rcParams["axes.prop_cycle"] = plt.cycler(color=WB_PALETTE)\n\n' +
        '# Or pass directly to a plot\n' +
        'fig, ax = plt.subplots()\n' +
        'for i, (label, values) in enumerate(data.items()):\n' +
        '    ax.bar(x, values, color=WB_PALETTE[i], label=label)';

      ggplotSnippet =
        'library(ggplot2)\n\n' +
        'wb_palette <- ' + hexRVec + '\n\n' +
        '# Discrete color scale\n' +
        'ggplot(df, aes(x = category, y = value, fill = group)) +\n' +
        '  geom_col() +\n' +
        '  scale_fill_manual(values = wb_palette)';

      cssSnippet =
        ':root {\n' + cssVars + '\n}\n\n' +
        '/* Usage example */\n' +
        '.series-1 { color: var(--wb-color-1); }\n' +
        '.series-2 { color: var(--wb-color-2); }';

    } else if (palette.type === 'sequential') {
      plotlySnippet =
        'WB_PALETTE = ' + hexPyList + '\n\n' +
        '# Plotly Express — sequential colorscale\n' +
        'import plotly.express as px\n' +
        'colorscale = [[i / (len(WB_PALETTE) - 1), c]\n' +
        '              for i, c in enumerate(WB_PALETTE)]\n\n' +
        'fig = px.choropleth(\n' +
        '    df, locations="iso_code", color="value",\n' +
        '    color_continuous_scale=colorscale\n' +
        ')';

      mplSnippet =
        'import matplotlib.pyplot as plt\n' +
        'import matplotlib.colors as mcolors\n\n' +
        'WB_PALETTE = ' + hexPyList + '\n\n' +
        '# Create a LinearSegmentedColormap\n' +
        'cmap = mcolors.LinearSegmentedColormap.from_list(\n' +
        '    "wb_sequential", WB_PALETTE\n' +
        ')\n\n' +
        '# Use in a plot\n' +
        'plt.imshow(data, cmap=cmap)';

      ggplotSnippet =
        'library(ggplot2)\n\n' +
        'wb_palette <- ' + hexRVec + '\n\n' +
        '# Continuous fill scale\n' +
        'ggplot(df, aes(x = lon, y = lat, fill = value)) +\n' +
        '  geom_tile() +\n' +
        '  scale_fill_gradientn(colors = wb_palette)';

      cssSnippet =
        ':root {\n' + cssVars + '\n}\n\n' +
        '/* CSS gradient (e.g. for a legend bar) */\n' +
        '.wb-legend {\n' +
        '  background: linear-gradient(\n' +
        '    to right,\n' +
        '    ' + hexes.join(',\n    ') + '\n' +
        '  );\n' +
        '}';

    } else { // diverging
      plotlySnippet =
        'WB_PALETTE = ' + hexPyList + '\n\n' +
        '# Plotly Express — diverging colorscale\n' +
        'import plotly.express as px\n' +
        'n = len(WB_PALETTE)\n' +
        'colorscale = [[i / (n - 1), c] for i, c in enumerate(WB_PALETTE)]\n\n' +
        'fig = px.choropleth(\n' +
        '    df, locations="iso_code", color="value",\n' +
        '    color_continuous_scale=colorscale,\n' +
        '    color_continuous_midpoint=0\n' +
        ')';

      mplSnippet =
        'import matplotlib.pyplot as plt\n' +
        'import matplotlib.colors as mcolors\n\n' +
        'WB_PALETTE = ' + hexPyList + '\n\n' +
        'cmap = mcolors.LinearSegmentedColormap.from_list(\n' +
        '    "wb_diverging", WB_PALETTE\n' +
        ')\n\n' +
        '# Centre the colormap at zero\n' +
        'norm = mcolors.TwoSlopeNorm(vmin=data.min(),\n' +
        '                            vcenter=0,\n' +
        '                            vmax=data.max())\n' +
        'plt.imshow(data, cmap=cmap, norm=norm)';

      ggplotSnippet =
        'library(ggplot2)\n\n' +
        'wb_palette <- ' + hexRVec + '\n\n' +
        '# Diverging fill with explicit midpoint\n' +
        'ggplot(df, aes(x = lon, y = lat, fill = value)) +\n' +
        '  geom_tile() +\n' +
        '  scale_fill_gradientn(\n' +
        '    colors = wb_palette,\n' +
        '    values = scales::rescale(c(min(df$value), 0, max(df$value)))\n' +
        '  )';

      cssSnippet =
        ':root {\n' + cssVars + '\n}\n\n' +
        '/* CSS gradient (e.g. for a legend bar) */\n' +
        '.wb-legend {\n' +
        '  background: linear-gradient(\n' +
        '    to right,\n' +
        '    ' + hexes.join(',\n    ') + '\n' +
        '  );\n' +
        '}';
    }

    return {
      plotly:    plotlySnippet,
      mpl:       mplSnippet,
      ggplot:    ggplotSnippet,
      css:       cssSnippet,
      hexArray:  'WB_PALETTE = ' + hexPyList
    };
  }

  // ============================================================
  // MINI CHART SVG
  // ============================================================
  function buildMiniChart(palette) {
    if (palette.type === 'categorical') {
      var bars = palette.colors.map(function (c, i) {
        var h = BAR_HEIGHTS[i % BAR_HEIGHTS.length];
        var y = 44 - h;
        var w = Math.floor(100 / palette.colors.length) - 2;
        var x = i * (w + 2);
        return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h +
               '" rx="1" fill="' + c.hex + '" opacity="0.92"/>';
      }).join('');
      return '<svg viewBox="0 0 100 44" width="100%" height="44" aria-hidden="true">' + bars + '</svg>';
    } else {
      // Sequential or diverging — gradient rectangle
      var stops = palette.colors.map(function (c, i) {
        var pct = Math.round((i / (palette.colors.length - 1)) * 100);
        return '<stop offset="' + pct + '%" stop-color="' + c.hex + '"/>';
      }).join('');
      var gradId = 'ppg-' + palette.id;
      return '<svg viewBox="0 0 100 20" width="100%" height="20" aria-hidden="true">' +
             '<defs><linearGradient id="' + gradId + '" x1="0" x2="1" y1="0" y2="0">' +
             stops + '</linearGradient></defs>' +
             '<rect x="0" y="0" width="100" height="20" rx="2" fill="url(#' + gradId + ')"/>' +
             '</svg>';
    }
  }

  // ============================================================
  // RENDER A SINGLE CARD
  // ============================================================
  function renderCard(palette) {
    var snippets = generateSnippets(palette);
    var snippetId = 'pp-snippet-' + palette.id;
    var tabsId = 'pp-tabs-' + palette.id;

    // Tags
    var typeLabel = palette.type.charAt(0).toUpperCase() + palette.type.slice(1);
    var cbTag = palette.colorblindSafe
      ? '<span class="pp-tag pp-tag-cb">&#10003; Colorblind-safe</span>' : '';
    var tags = '<span class="pp-tag">' + typeLabel + '</span>' +
               '<span class="pp-tag">' + palette.colors.length + ' colors</span>' +
               cbTag;

    // Swatches
    var swatches = palette.colors.map(function (c) {
      return '<div class="pp-swatch" style="background:' + c.hex + '" ' +
             'data-hex="' + c.hex + '" title="' + c.name + ' — ' + c.hex + '">' +
             '<span class="pp-swatch-tooltip">' + c.hex + '</span></div>';
    }).join('');

    // Hex chips
    var chips = palette.colors.map(function (c) {
      return '<button class="pp-hex-chip" data-copy="' + c.hex + '" ' +
             'title="Copy ' + c.hex + '">' + c.hex + '</button>';
    }).join('');

    // Mini chart
    var chartLabel = palette.type === 'categorical' ? 'Preview — bar chart' :
                     palette.type === 'sequential'  ? 'Preview — intensity scale (low → high)' :
                                                      'Preview — diverging scale (negative → positive)';
    var gradientLabels = palette.type !== 'categorical'
      ? (palette.type === 'sequential'
         ? '<div class="pp-gradient-labels"><span>Low</span><span>High</span></div>'
         : '<div class="pp-gradient-labels"><span>Negative</span><span>Zero</span><span>Positive</span></div>')
      : '';

    var miniChart = '<div class="pp-chart-preview">' +
      '<div class="pp-chart-label">' + chartLabel + '</div>' +
      buildMiniChart(palette) +
      gradientLabels +
      '</div>';

    // Snippet panel
    var panel = '<div class="pp-snippet-panel" id="' + snippetId + '">' +
      '<div class="pp-snippet-tabs" id="' + tabsId + '">' +
        '<button class="pp-snippet-tab pp-tab-active" data-tab="plotly">Plotly (Python)</button>' +
        '<button class="pp-snippet-tab" data-tab="mpl">Matplotlib</button>' +
        '<button class="pp-snippet-tab" data-tab="ggplot">ggplot2 (R)</button>' +
        '<button class="pp-snippet-tab" data-tab="css">CSS</button>' +
      '</div>' +
      '<div class="pp-snippet-content pp-tab-active" data-content="plotly"><pre>' + escHtml(snippets.plotly) + '</pre></div>' +
      '<div class="pp-snippet-content" data-content="mpl"><pre>' + escHtml(snippets.mpl) + '</pre></div>' +
      '<div class="pp-snippet-content" data-content="ggplot"><pre>' + escHtml(snippets.ggplot) + '</pre></div>' +
      '<div class="pp-snippet-content" data-content="css"><pre>' + escHtml(snippets.css) + '</pre></div>' +
    '</div>';

    var card = document.createElement('div');
    card.className = 'pp-card';
    card.dataset.type = palette.type;
    card.dataset.cb = palette.colorblindSafe ? 'true' : 'false';
    card.innerHTML =
      '<div class="pp-card-name">' + escHtml(palette.name) + '</div>' +
      '<div class="pp-card-meta">' + tags + '</div>' +
      '<div class="pp-swatches">' + swatches + '</div>' +
      '<div class="pp-hex-row">' + chips + '</div>' +
      miniChart +
      '<div class="pp-copy-row">' +
        '<button class="pp-copy-btn pp-copy-btn-primary" data-copy-array="' + palette.id + '">Copy hex array</button>' +
        '<button class="pp-copy-btn pp-toggle-snippet" data-target="' + snippetId + '" data-tabs="' + tabsId + '">Code snippets &#9660;</button>' +
      '</div>' +
      panel;

    return card;
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ============================================================
  // RENDER ALL CARDS
  // ============================================================
  function renderAll(palettes) {
    var list = document.getElementById('pp-palette-list');
    if (!list) return;
    list.innerHTML = '';

    var byType = {};
    palettes.forEach(function (p) {
      if (!byType[p.type]) byType[p.type] = [];
      byType[p.type].push(p);
    });

    var typeOrder = ['categorical', 'sequential', 'diverging'];
    var typeLabels = {
      categorical: 'Categorical — for comparing distinct groups',
      sequential:  'Sequential — for ordered data or magnitude',
      diverging:   'Diverging — for data with a meaningful midpoint'
    };

    var anyVisible = false;
    typeOrder.forEach(function (type) {
      var group = byType[type];
      if (!group || group.length === 0) return;
      anyVisible = true;

      var heading = document.createElement('div');
      heading.className = 'pp-section-label';
      heading.textContent = typeLabels[type] || type;
      list.appendChild(heading);

      var grid = document.createElement('div');
      grid.className = 'pp-grid';
      group.forEach(function (p) {
        grid.appendChild(renderCard(p));
      });
      list.appendChild(grid);
    });

    if (!anyVisible) {
      var empty = document.createElement('div');
      empty.className = 'pp-empty';
      empty.textContent = 'No palettes match the current filters.';
      list.appendChild(empty);
    }
  }

  // ============================================================
  // FILTER
  // ============================================================
  function getFiltered() {
    var activeBtn = document.querySelector('.pp-filter-btn.pp-active');
    var activeType = activeBtn ? activeBtn.dataset.type : 'all';
    var cbOnly = document.getElementById('pp-colorblind-toggle');
    var cbChecked = cbOnly && cbOnly.checked;

    return WB_PALETTES.filter(function (p) {
      if (activeType !== 'all' && p.type !== activeType) return false;
      if (cbChecked && !p.colorblindSafe) return false;
      return true;
    });
  }

  function rerender() {
    renderAll(getFiltered());
  }

  // ============================================================
  // EVENT DELEGATION
  // ============================================================
  function onDocClick(e) {
    var t = e.target;

    // Filter buttons
    if (t.classList.contains('pp-filter-btn')) {
      document.querySelectorAll('.pp-filter-btn').forEach(function (b) {
        b.classList.remove('pp-active');
      });
      t.classList.add('pp-active');
      rerender();
      return;
    }

    // Copy individual hex chip
    if (t.classList.contains('pp-hex-chip') && t.dataset.copy) {
      var hex = t.dataset.copy;
      copyToClipboard(hex).then(function () {
        showToast('Copied ' + hex);
      });
      return;
    }

    // Copy swatch (clicking a swatch color block)
    if (t.classList.contains('pp-swatch') && t.dataset.hex) {
      copyToClipboard(t.dataset.hex).then(function () {
        showToast('Copied ' + t.dataset.hex);
      });
      return;
    }

    // Copy hex array (Python list)
    if (t.classList.contains('pp-copy-btn-primary') && t.dataset.copyArray) {
      var pid = t.dataset.copyArray;
      var palette = WB_PALETTES.find(function (p) { return p.id === pid; });
      if (palette) {
        var snips = generateSnippets(palette);
        copyToClipboard(snips.hexArray).then(function () {
          showToast('Copied hex array!');
        });
      }
      return;
    }

    // Toggle code snippet panel
    if (t.classList.contains('pp-toggle-snippet') && t.dataset.target) {
      var panel = document.getElementById(t.dataset.target);
      if (panel) {
        var open = panel.classList.toggle('pp-open');
        t.innerHTML = 'Code snippets ' + (open ? '&#9650;' : '&#9660;');
      }
      return;
    }

    // Snippet tabs
    if (t.classList.contains('pp-snippet-tab') && t.dataset.tab) {
      var tabsContainer = t.closest('.pp-snippet-panel');
      if (!tabsContainer) return;
      tabsContainer.querySelectorAll('.pp-snippet-tab').forEach(function (b) {
        b.classList.remove('pp-tab-active');
      });
      tabsContainer.querySelectorAll('.pp-snippet-content').forEach(function (c) {
        c.classList.remove('pp-tab-active');
      });
      t.classList.add('pp-tab-active');
      var content = tabsContainer.querySelector('[data-content="' + t.dataset.tab + '"]');
      if (content) content.classList.add('pp-tab-active');
      return;
    }
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    if (!document.getElementById('palette-picker-root')) return;

    // Colorblind toggle
    var cbToggle = document.getElementById('pp-colorblind-toggle');
    if (cbToggle) {
      cbToggle.addEventListener('change', rerender);
    }

    // Event delegation for all clicks
    document.addEventListener('click', onDocClick);

    // Initial render
    renderAll(WB_PALETTES);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
