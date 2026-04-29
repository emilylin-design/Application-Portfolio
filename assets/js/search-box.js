/* ============================================================
   Search Box Component — Dropdown Behavior
   ============================================================ */

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.search-card');
    if (!card) return;

    const inner = card.querySelector('.search-card__inner');
    const dropdown = card.querySelector('.search-dropdown');
    const searchText = card.querySelector('.search-card__text');
    if (!inner || !dropdown) return;

    function openSearch() {
      dropdown.classList.add('search-dropdown--open');
      if (searchText) searchText.classList.add('search-card__text--focused');
    }

    function closeSearch() {
      dropdown.classList.remove('search-dropdown--open');
      if (searchText) searchText.classList.remove('search-card__text--focused');
    }

    // Open dropdown on click
    inner.addEventListener('click', (e) => {
      e.stopPropagation();
      if (dropdown.classList.contains('search-dropdown--open')) {
        closeSearch();
      } else {
        openSearch();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!card.contains(e.target)) {
        closeSearch();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSearch();
      }
    });

    // Dropdown item click → fill search text and close
    dropdown.querySelectorAll('.search-dropdown__item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = item.querySelector('.search-dropdown__item-text');
        const searchText = card.querySelector('.search-card__text');
        if (text && searchText) {
          searchText.textContent = text.textContent;
          searchText.style.color = 'var(--text-primary)';
        }
        dropdown.classList.remove('search-dropdown--open');
      });
    });

    // Init icons if HorizonIcons is available
    if (window.Horizon && window.Horizon.initIcons) {
      Horizon.initIcons(dropdown);
    }
  });
})();
