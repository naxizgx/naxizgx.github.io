// Publication filter for xian.github.io (DBLP style)
// Filters publications by year and venue

(function() {
  'use strict';

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
    var pubVenue = parseVenue(pub.venue);

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
      if (pubVenue !== venueFilter) return false;
    }

    return true;
  }

  // Build filter data from publications
  function buildFilterData() {
    var publications = document.querySelectorAll('.pub-item');
    var yearCounts = {};
    var venueCounts = {};

    publications.forEach(function(pub) {
      var year = parseYear(pub.getAttribute('data-date'));
      var venue = parseVenue(pub.getAttribute('data-venue'));
      yearCounts[year] = (yearCounts[year] || 0) + 1;
      venueCounts[venue] = (venueCounts[venue] || 0) + 1;
    });

    return { yearCounts: yearCounts, venueCounts: venueCounts };
  }

  // Build sidebar
  function buildSidebar(filterData) {
    var sidebar = document.getElementById('pub-sidebar');
    if (!sidebar) return;

    // Year filter section
    var yearSection = document.createElement('div');
    yearSection.className = 'filter-section';
    var yearHeader = document.createElement('div');
    yearHeader.className = 'filter-section-header';
    yearHeader.textContent = 'refine by year';
    yearSection.appendChild(yearHeader);

    var yearList = document.createElement('ul');
    yearList.className = 'filter-items';

    var allYearItem = document.createElement('li');
    allYearItem.className = 'filter-item active';
    allYearItem.dataset.filter = 'all';
    allYearItem.innerHTML = 'All Years <span class="filter-count">(' + document.querySelectorAll('.pub-item').length + ')</span>';
    yearList.appendChild(allYearItem);

    var years = Object.keys(filterData.yearCounts).sort(function(a, b) { return b - a; });
    years.forEach(function(year) {
      var item = document.createElement('li');
      item.className = 'filter-item';
      item.dataset.filter = year;
      item.innerHTML = year + ' <span class="filter-count">(' + filterData.yearCounts[year] + ')</span>';
      yearList.appendChild(item);
    });

    yearSection.appendChild(yearList);
    sidebar.appendChild(yearSection);

    // Venue filter section
    var venueSection = document.createElement('div');
    venueSection.className = 'filter-section';
    var venueHeader = document.createElement('div');
    venueHeader.className = 'filter-section-header';
    venueHeader.textContent = 'refine by venue';
    venueSection.appendChild(venueHeader);

    var venueList = document.createElement('ul');
    venueList.className = 'filter-items';

    var allVenueItem = document.createElement('li');
    allVenueItem.className = 'filter-item active';
    allVenueItem.dataset.filter = 'all';
    allVenueItem.innerHTML = 'All Venues <span class="filter-count">(' + document.querySelectorAll('.pub-item').length + ')</span>';
    venueList.appendChild(allVenueItem);

    var venueNames = {
      'asiacrypt': 'ASIACRYPT',
      'eurocrypt': 'EUROCRYPT',
      'dcc': 'DCC',
      'other': 'Other'
    };

    var venues = Object.keys(filterData.venueCounts).sort(function(a, b) {
      return filterData.venueCounts[b] - filterData.venueCounts[a];
    });

    venues.forEach(function(venue) {
      var item = document.createElement('li');
      item.className = 'filter-item';
      item.dataset.filter = venue;
      item.innerHTML = venueNames[venue] + ' <span class="filter-count">(' + filterData.venueCounts[venue] + ')</span>';
      venueList.appendChild(item);
    });

    venueSection.appendChild(venueList);
    sidebar.appendChild(venueSection);
  }

  // Attach click handlers
  function attachHandlers() {
    var yearSection = document.querySelector('.filter-section:first-child');
    var venueSection = document.querySelector('.filter-section:last-child');

    yearSection.querySelectorAll('.filter-item').forEach(function(item) {
      item.addEventListener('click', function() {
        yearSection.querySelectorAll('.filter-item').forEach(function(b) {
          b.classList.remove('active');
        });
        item.classList.add('active');
        applyFilters();
      });
    });

    venueSection.querySelectorAll('.filter-item').forEach(function(item) {
      item.addEventListener('click', function() {
        venueSection.querySelectorAll('.filter-item').forEach(function(b) {
          b.classList.remove('active');
        });
        item.classList.add('active');
        applyFilters();
      });
    });
  }

  // Apply filters
  function applyFilters() {
    var yearFilter = yearSection.querySelector('.filter-item.active').dataset.filter;
    var venueFilter = venueSection.querySelector('.filter-item.active').dataset.filter;
    var publications = document.querySelectorAll('.pub-item');
    var visibleCount = 0;

    publications.forEach(function(pub) {
      var matches = matchesFilter(pub, yearFilter, venueFilter);
      pub.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

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
      wrapper.setAttribute('data-date', item.getAttribute('data-date'));
      wrapper.setAttribute('data-venue', item.getAttribute('data-venue'));
      wrapper.appendChild(item);
      item.parentNode.replaceChild(wrapper, item);
    });
  }

  // Initialize
  function init() {
    wrapPublications();
    var filterData = buildFilterData();
    buildSidebar(filterData);
    attachHandlers();
    applyFilters();

    // Store refs for applyFilters
    var yearSection = document.querySelector('.filter-section:first-child');
    var venueSection = document.querySelector('.filter-section:last-child');
    window._pubYearSection = yearSection;
    window._pubVenueSection = venueSection;
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
