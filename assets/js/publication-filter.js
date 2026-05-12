// Publication filter for xian.github.io
// Filters publications by year and venue

(function() {
  'use strict';

  // Available filter groups
  var filters = {
    years: [
      { label: 'All Years', value: 'all' },
      { label: '2024', value: '2024' },
      { label: '2023', value: '2023' },
      { label: '2022', value: '2022' },
      { label: '2021', value: '2021' },
      { label: '2020+', value: '2020+' },
      { label: '2018', value: '2018' },
      { label: '2017', value: '2017' }
    ],
    venues: [
      { label: 'All Venues', value: 'all' },
      { label: 'ASIACRYPT', value: 'asiacrypt' },
      { label: 'EUROCRYPT', value: 'eurocrypt' },
      { label: 'DCC', value: 'dcc' },
      { label: 'Other', value: 'other' }
    ]
  };

  // Venue name mapping
  var venueMap = {
    'asiacrypt': ['asiacrypt', 'asiacrypt 2024', 'asiacrypt 2023', 'asiacrypt 2022'],
    'eurocrypt': ['eurocrypt', 'eurocrypt 2023'],
    'dcc': ['dcc'],
    'other': ['icisc', 'the computer journal', 'dcc 91(4)', 'journal']
  };

  // Parse venue from venue string
  function parseVenue(venue) {
    var v = venue.toLowerCase();
    if (v.indexOf('asiacrypt') !== -1) return 'asiacrypt';
    if (v.indexOf('eurocrypt') !== -1) return 'eurocrypt';
    if (v.indexOf('dcc') !== -1) return 'dcc';
    return 'other';
  }

  // Parse year from date string
  function parseYear(dateStr) {
    var date = new Date(dateStr);
    return date.getFullYear();
  }

  // Check if a publication matches the current filters
  function matchesFilter(pub, yearFilter, venueFilter) {
    var pubYear = parseYear(pub.date);

    // Year filter
    if (yearFilter !== 'all') {
      if (yearFilter === '2020+') {
        if (pubYear < 2020) return false;
      } else {
        if (pubYear !== parseInt(yearFilter)) return false;
      }
    }

    // Venue filter
    if (venueFilter !== 'all') {
      var pubVenue = parseVenue(pub.venue);
      if (pubVenue !== venueFilter) return false;
    }

    return true;
  }

  // Build filter UI
  function buildFilters() {
    var container = document.getElementById('pub-filters');
    if (!container) return;

    // Year filters
    var yearSection = document.createElement('div');
    yearSection.className = 'filter-group';
    yearSection.innerHTML = '<span class="filter-label">Year:</span>';
    var yearGroup = document.createElement('div');
    yearGroup.className = 'filter-buttons';
    filters.years.forEach(function(f) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-btn active';
      btn.dataset.filter = f.value;
      btn.textContent = f.label;
      btn.addEventListener('click', function() {
        yearGroup.querySelectorAll('.filter-btn').forEach(function(b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        applyFilters();
      });
      yearGroup.appendChild(btn);
    });
    yearSection.appendChild(yearGroup);
    container.appendChild(yearSection);

    // Venue filters
    var venueSection = document.createElement('div');
    venueSection.className = 'filter-group';
    venueSection.innerHTML = '<span class="filter-label">Venue:</span>';
    var venueGroup = document.createElement('div');
    venueGroup.className = 'filter-buttons';
    filters.venues.forEach(function(f) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-btn active';
      btn.dataset.filter = f.value;
      btn.textContent = f.label;
      btn.addEventListener('click', function() {
        venueGroup.querySelectorAll('.filter-btn').forEach(function(b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        applyFilters();
      });
      venueGroup.appendChild(btn);
    });
    venueSection.appendChild(venueGroup);
    container.appendChild(venueSection);
  }

  // Apply filters
  function applyFilters() {
    var yearFilter = document.querySelector('.filter-group:first-child .filter-btn.active').dataset.filter;
    var venueFilter = document.querySelector('.filter-group:last-child .filter-btn.active').dataset.filter;
    var publications = document.querySelectorAll('.pub-item');
    var visibleCount = 0;

    publications.forEach(function(pub) {
      var matches = matchesFilter(pub, yearFilter, venueFilter);
      pub.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    // Update count
    var countEl = document.getElementById('pub-count');
    if (countEl) {
      countEl.textContent = visibleCount + ' publications found';
    }
  }

  // Wrap each publication in a filterable div
  function wrapPublications() {
    var pubList = document.getElementById('pub-list');
    if (!pubList) return;

    var items = pubList.querySelectorAll('.archive__item');
    items.forEach(function(item) {
      var wrapper = document.createElement('div');
      wrapper.className = 'pub-item';
      wrapper.appendChild(item);
      item.parentNode.replaceChild(wrapper, item);
    });
  }

  // Initialize
  function init() {
    wrapPublications();
    buildFilters();
    applyFilters();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
