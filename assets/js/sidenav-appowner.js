/**
 * Horizon Prototype — AppOwner Sidenav Component
 * Registers the IT Application Owner side navigation in window.HorizonComponents.
 * Used by pages under `prototype - app roadmap/`.
 * Include BEFORE interactions.js (no defer).
 */

window.HorizonComponents = window.HorizonComponents || {};

window.HorizonComponents['appowner-sidenav'] = `
<nav class="sidenav sidenav--collapsed sidenav--dark" id="sidenav-main" aria-label="AppOwner Workspace navigation">
  <div class="sidenav__header">
    <button class="sidenav__menu-btn" aria-label="Toggle navigation">
      <span data-icon="menu"></span>
    </button>
  </div>

  <div class="sidenav__top">
    <div class="sidenav__nav">
      <a class="sidenav__item sidenav__item--active" href="AppOwner_landing.html" title="Home">
        <span data-icon="home"></span>
        <span class="sidenav__item__label">Home</span>
      </a>
      <button class="sidenav__item" id="nav-recent-chats" title="Recent chats">
        <span data-icon="history"></span>
        <span class="sidenav__item__label">Recent chats</span>
      </button>
      <button class="sidenav__item" title="Notifications">
        <span data-icon="bell"></span>
        <span class="sidenav__item__label">Notifications</span>
      </button>
      <div class="sidenav__divider"></div>

      <button class="sidenav__item" title="My to-do">
        <span data-icon="checklist"></span>
        <span class="sidenav__item__label">My to-do</span>
      </button>

      <a class="sidenav__item" href="AppOwner_myapps.html" title="My applications">
        <span data-icon="layers-middle"></span>
        <span class="sidenav__item__label">My applications</span>
      </a>

      <a class="sidenav__item" href="AppOwner_roadmap.html" title="Roadmap">
        <span data-icon="rocketship"></span>
        <span class="sidenav__item__label">Roadmap</span>
      </a>

      <div class="sidenav__divider"></div>
      <button class="sidenav__item" title="Settings">
        <span data-icon="gear"></span>
        <span class="sidenav__item__label">Settings</span>
      </button>
    </div>
  </div>

  <div class="sidenav__bottom">
    <div class="sidenav__profile">
      <div class="sidenav__avatar">
        <div class="sidenav__avatar-img">SC</div>
        <div class="sidenav__avatar-status"></div>
      </div>
      <span class="sidenav__profile-name">Sarah Chen</span>
      <button class="sidenav__profile-more" aria-label="Profile options">
        <span data-icon="more-vertical"></span>
      </button>
    </div>
  </div>
</nav>
`;
