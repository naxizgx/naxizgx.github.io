/*
 * Progressive enhancement for the site.
 *
 * Two small behaviours only: the colour theme control and the publication
 * refinement filters. There is no framework, no jQuery and no third-party code.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function storedTheme() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  /*
   * The document already resolved the theme inline, before the stylesheet was
   * parsed. Only fall back to resolving it here when that did not happen.
   */
  if (!root.getAttribute('data-theme')) {
    applyTheme(storedTheme() || (media.matches ? 'dark' : 'light'));
  }

  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch (error) {
        /* Private browsing: the choice simply does not persist. */
      }
    });
  }

  function followSystem(event) {
    if (!storedTheme()) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  }

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', followSystem);
  } else if (typeof media.addListener === 'function') {
    media.addListener(followSystem);
  }

  /*
   * Publication refinement.
   *
   * Every entry carries data-year and data-venue; every button carries the
   * facet it belongs to and the value it selects. The list is rendered on the
   * server, so the page still reads correctly without scripting.
   */
  var content = document.getElementById('pub-content');
  if (!content) {
    return;
  }

  function list(selector) {
    return Array.prototype.slice.call(content.querySelectorAll(selector));
  }

  var items = list('.pub-item');
  var sections = list('.category-section');
  var groups = list('.filter-items');
  var selection = {};

  groups.forEach(function (group) {
    selection[group.getAttribute('data-filter-group')] = 'all';
  });

  function isMatch(item) {
    return Object.keys(selection).every(function (facet) {
      var wanted = selection[facet];
      return wanted === 'all' || item.getAttribute('data-' + facet) === wanted;
    });
  }

  function refresh() {
    items.forEach(function (item) {
      var visible = isMatch(item);
      item.classList.toggle('is-hidden', !visible);
    });
    sections.forEach(function (section) {
      var remaining = section.querySelectorAll('.pub-item:not(.is-hidden)').length;
      section.classList.toggle('is-hidden', remaining === 0);
    });
  }

  groups.forEach(function (group) {
    var facet = group.getAttribute('data-filter-group');
    var buttons = Array.prototype.slice.call(group.querySelectorAll('.filter-item'));

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        selection[facet] = button.getAttribute('data-filter');
        buttons.forEach(function (other) {
          var active = other === button;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        refresh();
      });
    });
  });

  refresh();
})();
