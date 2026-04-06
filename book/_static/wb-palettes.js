/* =============================================================
   WB Palettes — Single source of truth for all WB color palettes.
   Exposes window.WB.palettes (array) for palette-picker.js and
   wb-gallery.js to consume.

   Load order: this file MUST load before palette-picker.js and
   wb-gallery.js (enforced in _config.yml html_js_files).
   ============================================================= */

(function () {
  'use strict';

  window.WB = window.WB || {};

  window.WB.palettes = [
    {
      id: 'wb-categorical',
      name: 'WB Categorical',
      type: 'categorical',
      colorblindSafe: true,
      usage: 'Named groups in bar, line, or pie charts. Use colors in order; limit to 4 for clarity.',
      colors: [
        { name: 'Navy',   hex: '#002244' },
        { name: 'Blue',   hex: '#009FDA' },
        { name: 'Yellow', hex: '#F7B841' },
        { name: 'Purple', hex: '#872C8F' },
        { name: 'Teal',   hex: '#00A996' },
        { name: 'Red',    hex: '#91302F' }
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
        { name: 'Navy',   hex: '#002244' },
        { name: 'Yellow', hex: '#F7B841' }
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
      name: 'WB Blue\u2013Yellow Diverging',
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
    },
    {
      id: 'rag-status',
      name: 'RAG Status',
      type: 'categorical',
      colorblindSafe: false,
      usage: 'Red-Amber-Green for status tables and KPI indicators. Not for charts.',
      colors: [
        { name: 'High: Critical',  hex: '#D73027' },
        { name: 'Medium: Caution', hex: '#FFFFBF' },
        { name: 'Low: On track',   hex: '#1A9850' }
      ]
    },
    {
      id: 'rag-diverging',
      name: 'RAG Diverging',
      type: 'diverging',
      colorblindSafe: false,
      usage: 'Risk/hazard diverging scale for choropleths and heatmaps. ColorBrewer RdYlGn 7-class.',
      colors: [
        { name: 'Critical',        hex: '#D73027' },
        { name: 'High risk',       hex: '#FC8D59' },
        { name: 'Elevated',        hex: '#FEE08B' },
        { name: 'Neutral',         hex: '#FFFFBF' },
        { name: 'Improving',       hex: '#D9EF8B' },
        { name: 'On track',        hex: '#91CF60' },
        { name: 'Exceeding',       hex: '#1A9850' }
      ]
    }
  ];

  // Helper: get hex array from a palette by id
  window.WB.getPaletteHexes = function (id) {
    for (var i = 0; i < window.WB.palettes.length; i++) {
      if (window.WB.palettes[i].id === id) {
        return window.WB.palettes[i].colors.map(function (c) { return c.hex; });
      }
    }
    return [];
  };

  // Helper: find palette by id
  window.WB.getPalette = function (id) {
    for (var i = 0; i < window.WB.palettes.length; i++) {
      if (window.WB.palettes[i].id === id) {
        return window.WB.palettes[i];
      }
    }
    return null;
  };

}());
