/* =============================================================
   WB Utils — Shared utilities for WB Design Guidelines tools
   Exposed on window.WB for use by palette-picker.js, wb-gallery.js
   Must load FIRST (before palette-picker.js and wb-gallery.js)
   ============================================================= */

(function () {
  'use strict';

  // Inject a single global toast element on first load
  function injectToast() {
    if (document.getElementById('wb-toast')) return;
    var el = document.createElement('div');
    el.id = 'wb-toast';
    el.className = 'wb-toast';
    document.body.appendChild(el);
  }

  var toastTimer = null;

  function showToast(msg) {
    var el = document.getElementById('wb-toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('wb-toast-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove('wb-toast-visible');
    }, 2000);
  }

  function copyToClipboard(text, successMsg) {
    successMsg = successMsg || 'Copied!';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast(successMsg);
      }).catch(function () {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (e) {
      showToast('Copy failed');
    }
    document.body.removeChild(ta);
  }

  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Expose on window.WB (merge, don't overwrite — wb-palettes.js loads first)
  window.WB = window.WB || {};
  window.WB.showToast = showToast;
  window.WB.copyToClipboard = copyToClipboard;
  window.WB.escHtml = escHtml;

  // Inject toast container when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectToast);
  } else {
    injectToast();
  }
}());
