/* =============================================================
   WB Gallery — Interactive chart examples + map ramp tool
   Vanilla JS, no external dependencies beyond Plotly.js (CDN).
   Only initialises on pages containing #wb-gallery-root.

   Load order (enforced by _config.yml html_js_files):
     1. wb-palettes.js — window.WB.palettes (shared palette data)
     2. wb-utils.js    — window.WB.* utilities
     3. palette-picker.js — palette picker
     4. wb-gallery.js  — this file
     5. plotly-basic CDN — loaded by _config.yml html_js_files
   ============================================================= */

(function () {
  'use strict';

  // ============================================================
  // PALETTE DEFINITIONS (hex arrays)
  // Used for chart palette selector chips and map ramp selector
  // ============================================================
  var CHART_PALETTES = [
    {
      id: 'wb-categorical',
      name: 'WB Categorical',
      colors: ['#002244', '#009FDA', '#F7B841', '#872C8F', '#00A996', '#91302F']
    },
    {
      id: 'wb-duo',
      name: 'WB Duo',
      colors: ['#002244', '#F7B841']
    },
    {
      id: 'uk-categorical',
      name: 'Alt Categorical',
      colors: ['#12436D', '#28A197', '#801650', '#F46A25', '#3D3D3D', '#A285D1']
    },
    {
      id: 'wb-sequential-blue',
      name: 'WB Blue Sequential',
      colors: ['#E8F5FC', '#7DCFED', '#009FDA', '#005F8A', '#002244']
    },
    {
      id: 'wb-sequential-teal',
      name: 'WB Teal Sequential',
      colors: ['#E6F7F5', '#7DD5CB', '#00A996', '#007A6E', '#003D38']
    }
  ];

  var MAP_RAMPS = [
    {
      id: 'wb-sequential-blue',
      name: 'WB Blue Sequential',
      colors: ['#E8F5FC', '#7DCFED', '#009FDA', '#005F8A', '#002244']
    },
    {
      id: 'wb-sequential-teal',
      name: 'WB Teal Sequential',
      colors: ['#E6F7F5', '#7DD5CB', '#00A996', '#007A6E', '#003D38']
    },
    {
      id: 'wb-diverging-blue-yellow',
      name: 'WB Blue\u2013Yellow Diverging',
      colors: ['#002244', '#336D8E', '#99B6C7', '#F7B841', '#F9CD7A', '#FDE8B3', '#F7F8FA']
    }
  ];


  // ============================================================
  // CHART CONFIGS
  // Each config: { id, title, plotlySpec(palette), codeSnippet(palette) }
  // ============================================================
  var chartConfigs = [
    {
      id: 'bar',
      title: 'Horizontal Bar Chart',
      plotlySpec: function (palette) {
        var categories = ['Education', 'Health', 'Infrastructure', 'Agriculture', 'Governance'];
        var values = [42, 67, 31, 58, 45];
        return {
          data: [{
            type: 'bar',
            orientation: 'h',
            x: values,
            y: categories,
            marker: {
              color: categories.map(function (_, i) { return palette[i % palette.length]; })
            },
            hovertemplate: '%{y}: %{x}%<extra></extra>'
          }],
          layout: {
            margin: { l: 100, r: 20, t: 30, b: 40 },
            xaxis: {
              title: { text: 'Score (0–100)', font: { size: 11 } },
              range: [0, 80],
              gridcolor: '#E5E7EB',
              tickfont: { size: 11 }
            },
            yaxis: { tickfont: { size: 11 } },
            plot_bgcolor: 'white',
            paper_bgcolor: 'white',
            font: { family: '"Open Sans", system-ui, sans-serif', size: 12, color: '#374151' },
            showlegend: false,
            height: 300
          }
        };
      },
      codeSnippet: function (palette) {
        var hexList = JSON.stringify(palette, null, 4);
        return (
          'import plotly.express as px\n' +
          'import pandas as pd\n\n' +
          'WB_PALETTE = ' + hexList + '\n\n' +
          'df = pd.DataFrame({\n' +
          '    "category": ["Education", "Health", "Infrastructure",\n' +
          '                 "Agriculture", "Governance"],\n' +
          '    "value":    [42, 67, 31, 58, 45]\n' +
          '})\n\n' +
          'fig = px.bar(\n' +
          '    df,\n' +
          '    x="value",\n' +
          '    y="category",\n' +
          '    orientation="h",\n' +
          '    color="category",\n' +
          '    color_discrete_sequence=WB_PALETTE\n' +
          ')\n' +
          'fig.update_layout(\n' +
          '    showlegend=False,\n' +
          '    plot_bgcolor="white",\n' +
          '    xaxis_title="Score (0\u2013100)"\n' +
          ')\n' +
          'fig.show()'
        );
      }
    },
    {
      id: 'line',
      title: 'Line Chart',
      plotlySpec: function (palette) {
        var years = [2018, 2019, 2020, 2021, 2022, 2023];
        var series = [
          { name: 'Jordan',    values: [68, 71, 65, 70, 74, 76] },
          { name: 'Lebanon',   values: [55, 58, 51, 54, 57, 59] },
          { name: 'West Bank', values: [42, 45, 40, 44, 48, 50] }
        ];
        return {
          data: series.map(function (s, i) {
            return {
              type: 'scatter',
              mode: 'lines+markers',
              name: s.name,
              x: years,
              y: s.values,
              line: { color: palette[i % palette.length], width: 2 },
              marker: { color: palette[i % palette.length], size: 6 },
              hovertemplate: s.name + ' %{x}: %{y}<extra></extra>'
            };
          }),
          layout: {
            margin: { l: 50, r: 20, t: 30, b: 50 },
            xaxis: {
              title: { text: 'Year', font: { size: 11 } },
              tickfont: { size: 11 },
              dtick: 1
            },
            yaxis: {
              title: { text: 'Index Score', font: { size: 11 } },
              tickfont: { size: 11 },
              gridcolor: '#E5E7EB',
              range: [30, 90]
            },
            plot_bgcolor: 'white',
            paper_bgcolor: 'white',
            font: { family: '"Open Sans", system-ui, sans-serif', size: 12, color: '#374151' },
            legend: { x: 0.02, y: 0.98, font: { size: 11 } },
            height: 300
          }
        };
      },
      codeSnippet: function (palette) {
        var hexList = JSON.stringify(palette, null, 4);
        return (
          'import plotly.express as px\n' +
          'import pandas as pd\n\n' +
          'WB_PALETTE = ' + hexList + '\n\n' +
          'df = pd.DataFrame({\n' +
          '    "year":   [2018,2019,2020,2021,2022,2023] * 3,\n' +
          '    "score":  [68,71,65,70,74,76,\n' +
          '               55,58,51,54,57,59,\n' +
          '               42,45,40,44,48,50],\n' +
          '    "country":["Jordan"]*6 + ["Lebanon"]*6 + ["West Bank"]*6\n' +
          '})\n\n' +
          'fig = px.line(\n' +
          '    df,\n' +
          '    x="year",\n' +
          '    y="score",\n' +
          '    color="country",\n' +
          '    markers=True,\n' +
          '    color_discrete_sequence=WB_PALETTE\n' +
          ')\n' +
          'fig.update_layout(\n' +
          '    plot_bgcolor="white",\n' +
          '    yaxis_title="Index Score"\n' +
          ')\n' +
          'fig.show()'
        );
      }
    },
    {
      id: 'scatter',
      title: 'Scatter Plot',
      plotlySpec: function (palette) {
        var data = [
          { name: 'Jordan',    gdp: 4300, hdi: 0.72, pop: 10.2 },
          { name: 'Lebanon',   gdp: 3100, hdi: 0.73, pop: 5.4  },
          { name: 'West Bank', gdp: 3700, hdi: 0.71, pop: 3.0  },
          { name: 'Egypt',     gdp: 3600, hdi: 0.71, pop: 102  },
          { name: 'Morocco',   gdp: 3400, hdi: 0.68, pop: 36.9 },
          { name: 'Tunisia',   gdp: 3900, hdi: 0.73, pop: 11.9 }
        ];
        return {
          data: data.map(function (d, i) {
            return {
              type: 'scatter',
              mode: 'markers',
              name: d.name,
              x: [d.gdp],
              y: [d.hdi],
              marker: {
                color: palette[i % palette.length],
                size: 10 + Math.sqrt(d.pop) * 2,
                opacity: 0.85,
                line: { color: 'white', width: 1 }
              },
              hovertemplate: d.name + '<br>GDP/cap: $%{x}<br>HDI: %{y}<extra></extra>'
            };
          }),
          layout: {
            margin: { l: 60, r: 20, t: 30, b: 50 },
            xaxis: {
              title: { text: 'GDP per capita (USD)', font: { size: 11 } },
              tickfont: { size: 11 },
              gridcolor: '#E5E7EB'
            },
            yaxis: {
              title: { text: 'Human Development Index', font: { size: 11 } },
              tickfont: { size: 11 },
              gridcolor: '#E5E7EB',
              range: [0.60, 0.80]
            },
            plot_bgcolor: 'white',
            paper_bgcolor: 'white',
            font: { family: '"Open Sans", system-ui, sans-serif', size: 12, color: '#374151' },
            showlegend: true,
            legend: { x: 0.02, y: 0.02, font: { size: 11 } },
            height: 300
          }
        };
      },
      codeSnippet: function (palette) {
        var hexList = JSON.stringify(palette, null, 4);
        return (
          'import plotly.express as px\n' +
          'import pandas as pd\n\n' +
          'WB_PALETTE = ' + hexList + '\n\n' +
          'df = pd.DataFrame({\n' +
          '    "country": ["Jordan","Lebanon","West Bank",\n' +
          '                "Egypt","Morocco","Tunisia"],\n' +
          '    "gdp_pc":  [4300, 3100, 3700, 3600, 3400, 3900],\n' +
          '    "hdi":     [0.72, 0.73, 0.71, 0.71, 0.68, 0.73],\n' +
          '    "pop_m":   [10.2,  5.4,  3.0, 102,  36.9, 11.9]\n' +
          '})\n\n' +
          'fig = px.scatter(\n' +
          '    df,\n' +
          '    x="gdp_pc",\n' +
          '    y="hdi",\n' +
          '    color="country",\n' +
          '    size="pop_m",\n' +
          '    hover_name="country",\n' +
          '    color_discrete_sequence=WB_PALETTE\n' +
          ')\n' +
          'fig.update_layout(\n' +
          '    plot_bgcolor="white",\n' +
          '    xaxis_title="GDP per capita (USD)",\n' +
          '    yaxis_title="Human Development Index"\n' +
          ')\n' +
          'fig.show()'
        );
      }
    }
  ];

  // ============================================================
  // STATE
  // ============================================================
  var activeChartId = 'bar';
  var activePaletteId = CHART_PALETTES[0].id;
  var activeRampId = MAP_RAMPS[0].id;
  var chartRefs = {};    // { chartId: true } once initialized
  var hintDismissed = false;

  // ============================================================
  // HELPERS
  // ============================================================
  function getPalette(id) {
    for (var i = 0; i < CHART_PALETTES.length; i++) {
      if (CHART_PALETTES[i].id === id) return CHART_PALETTES[i].colors;
    }
    return CHART_PALETTES[0].colors;
  }

  function getRamp(id) {
    for (var i = 0; i < MAP_RAMPS.length; i++) {
      if (MAP_RAMPS[i].id === id) return MAP_RAMPS[i].colors;
    }
    return MAP_RAMPS[0].colors;
  }

  function getConfig(id) {
    for (var i = 0; i < chartConfigs.length; i++) {
      if (chartConfigs[i].id === id) return chartConfigs[i];
    }
    return chartConfigs[0];
  }

  // ============================================================
  // CHART SECTION
  // ============================================================
  function showFallback() {
    var area = document.getElementById('wg-chart-container');
    if (!area) return;
    area.innerHTML =
      '<div class="wg-chart-fallback">' +
      '<strong>Chart unavailable</strong>' +
      'The Plotly chart library could not be loaded (your network may block the CDN). ' +
      'The code snippet below still works — paste it into a Python notebook to see the chart.' +
      '</div>';
  }

  function renderChart() {
    if (typeof Plotly === 'undefined') {
      showFallback();
      return;
    }

    var container = document.getElementById('wg-chart-container');
    if (!container) return;

    // Remove skeleton if present
    var skeleton = container.querySelector('.wg-chart-skeleton');
    if (skeleton) skeleton.remove();

    var config = getConfig(activeChartId);
    var palette = getPalette(activePaletteId);
    var spec = config.plotlySpec(palette);

    var plotDiv = container.querySelector('.wg-plotly-div');
    if (!plotDiv) {
      plotDiv = document.createElement('div');
      plotDiv.className = 'wg-plotly-div';
      container.appendChild(plotDiv);
    }

    if (!chartRefs[activeChartId]) {
      Plotly.newPlot(plotDiv, spec.data, spec.layout, { responsive: true, displayModeBar: false });
      chartRefs[activeChartId] = true;
    } else {
      Plotly.react(plotDiv, spec.data, spec.layout);
    }
  }

  function updateCodeBlock() {
    var config = getConfig(activeChartId);
    var palette = getPalette(activePaletteId);
    var snippet = config.codeSnippet(palette);

    var pre = document.getElementById('wg-chart-code');
    if (pre) pre.textContent = snippet;
  }

  function updateChartChips() {
    var chips = document.querySelectorAll('.wg-chart-chip');
    chips.forEach(function (c) {
      c.classList.toggle('wg-chip-active', c.dataset.paletteId === activePaletteId);
    });
  }

  function updateChartTabs() {
    document.querySelectorAll('.wg-tab[data-chart]').forEach(function (t) {
      t.classList.toggle('wg-tab-active', t.dataset.chart === activeChartId);
    });
  }

  // ============================================================
  // MAP SECTION
  // ============================================================
  function recolorMap(rampId) {
    var ramp = getRamp(rampId);
    for (var i = 0; i < 5; i++) {
      var el = document.getElementById('region-' + i);
      if (el) el.style.fill = ramp[i];
    }
  }

  function updateMapCode() {
    var ramp = getRamp(activeRampId);
    var hexList = ramp.map(function (h) { return '"' + h + '"'; }).join(', ');
    var snippet =
      'import plotly.express as px\n' +
      'import pandas as pd\n\n' +
      'WB_RAMP = [' + hexList + ']\n\n' +
      '# Build colorscale for Plotly choropleth\n' +
      'n = len(WB_RAMP)\n' +
      'colorscale = [[i / (n - 1), c] for i, c in enumerate(WB_RAMP)]\n\n' +
      'fig = px.choropleth(\n' +
      '    df,\n' +
      '    locations="iso_alpha",\n' +
      '    color="value",\n' +
      '    color_continuous_scale=colorscale,\n' +
      '    scope="asia"\n' +
      ')\n' +
      'fig.show()';

    var pre = document.getElementById('wg-map-code');
    if (pre) pre.textContent = snippet;
  }

  function updateRampRows() {
    document.querySelectorAll('.wg-ramp-row').forEach(function (row) {
      row.classList.toggle('wg-ramp-active', row.dataset.rampId === activeRampId);
    });
  }

  // ============================================================
  // EVENT DELEGATION
  // ============================================================
  document.addEventListener('click', function (e) {
    var t = e.target;

    // Chart type tab
    if (t.classList.contains('wg-tab') && t.dataset.chart) {
      activeChartId = t.dataset.chart;
      activePaletteId = CHART_PALETTES[0].id; // reset to first palette on tab switch
      updateChartTabs();
      updateChartChips();
      renderChart();
      updateCodeBlock();
      return;
    }

    // Palette chip
    if (t.classList.contains('wg-chart-chip') && t.dataset.paletteId) {
      activePaletteId = t.dataset.paletteId;
      updateChartChips();
      renderChart();
      updateCodeBlock();
      // Dismiss the hint after first interaction
      if (!hintDismissed) {
        var hint = document.getElementById('wg-chart-hint');
        if (hint) hint.classList.add('wg-hidden');
        hintDismissed = true;
      }
      return;
    }

    // Copy chart code button
    if (t.id === 'wg-copy-chart-code') {
      var pre = document.getElementById('wg-chart-code');
      if (pre && window.WB) {
        window.WB.copyToClipboard(pre.textContent, 'Copied!');
        t.textContent = 'Copied ✓';
        setTimeout(function () { t.textContent = 'Copy code'; }, 2000);
      }
      return;
    }

    // Ramp row
    if (t.classList.contains('wg-ramp-row') || t.closest('.wg-ramp-row')) {
      var row = t.classList.contains('wg-ramp-row') ? t : t.closest('.wg-ramp-row');
      if (row && row.dataset.rampId) {
        activeRampId = row.dataset.rampId;
        recolorMap(activeRampId);
        updateMapCode();
        updateRampRows();
      }
      return;
    }

    // Copy map code button
    if (t.id === 'wg-copy-map-code') {
      var mapPre = document.getElementById('wg-map-code');
      if (mapPre && window.WB) {
        window.WB.copyToClipboard(mapPre.textContent, 'Copied!');
        t.textContent = 'Copied ✓';
        setTimeout(function () { t.textContent = 'Copy code'; }, 2000);
      }
      return;
    }
  });

  // Keyboard navigation for ramp rows
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t.classList.contains('wg-ramp-row') && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      if (t.dataset.rampId) {
        activeRampId = t.dataset.rampId;
        recolorMap(activeRampId);
        updateMapCode();
        updateRampRows();
      }
    }
  });

  // ============================================================
  // BUILD CHIP SELECTORS (injected into DOM)
  // ============================================================
  function buildChartChips() {
    var container = document.getElementById('wg-palette-chips');
    if (!container) return;
    container.innerHTML = '';
    CHART_PALETTES.forEach(function (p) {
      var btn = document.createElement('button');
      btn.className = 'wg-chip wg-chart-chip' + (p.id === activePaletteId ? ' wg-chip-active' : '');
      btn.dataset.paletteId = p.id;
      btn.title = p.name;
      // Show a small color square
      btn.innerHTML =
        '<span style="display:inline-flex;gap:2px;align-items:center;">' +
        p.colors.slice(0, 4).map(function (c) {
          return '<span style="width:10px;height:10px;background:' + c + ';border-radius:1px;display:inline-block;"></span>';
        }).join('') +
        '</span>';
      container.appendChild(btn);
    });
  }

  function buildRampRows() {
    var container = document.getElementById('wg-ramp-rows');
    if (!container) return;
    container.innerHTML = '';
    MAP_RAMPS.forEach(function (ramp) {
      var row = document.createElement('div');
      row.className = 'wg-ramp-row' + (ramp.id === activeRampId ? ' wg-ramp-active' : '');
      row.dataset.rampId = ramp.id;
      row.setAttribute('tabindex', '0');
      row.setAttribute('role', 'radio');
      row.setAttribute('aria-checked', ramp.id === activeRampId ? 'true' : 'false');

      // Gradient swatch
      var gradient = 'linear-gradient(to right, ' + ramp.colors.join(', ') + ')';
      var swatch = document.createElement('span');
      swatch.className = 'wg-ramp-swatch';
      swatch.style.background = gradient;

      var label = document.createElement('span');
      label.className = 'wg-ramp-name';
      label.textContent = ramp.name;

      row.appendChild(swatch);
      row.appendChild(label);
      container.appendChild(row);
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    // Guard: only run on gallery page
    if (!document.getElementById('wb-gallery-root')) return;

    buildChartChips();
    buildRampRows();
    updateChartTabs();
    updateCodeBlock();
    recolorMap(activeRampId);
    updateMapCode();

    // Render chart — guard on Plotly availability
    if (typeof Plotly !== 'undefined') {
      renderChart();
    } else {
      // Plotly may still be loading (from CDN via html_js_files).
      // Wait up to 5 seconds for it to appear.
      var attempts = 0;
      var pollInterval = setInterval(function () {
        attempts++;
        if (typeof Plotly !== 'undefined') {
          clearInterval(pollInterval);
          renderChart();
        } else if (attempts >= 25) {
          clearInterval(pollInterval);
          showFallback();
        }
      }, 200);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
