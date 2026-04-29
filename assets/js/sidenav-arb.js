/**
 * Horizon Prototype — ARB Sidenav Component
 * Variant of the EA sidenav used only by ARB_5 / ARB_6 / ARB_7 / ARB_8.
 * Differs from ea-sidenav: "Initiatives" group is replaced by a flat
 * "Architecture Review Board" top-level item (no expand/collapse, no children).
 * Include BEFORE interactions.js (no defer).
 */

window.HorizonComponents = window.HorizonComponents || {};

window.HorizonComponents['ea-sidenav-arb'] = `
<nav class="sidenav sidenav--collapsed sidenav--dark" id="sidenav-main" aria-label="EA Workspace navigation">
  <div class="sidenav__header">
    <button class="sidenav__menu-btn" aria-label="Toggle navigation">
      <span data-icon="menu"></span>
    </button>
    <div class="sidenav__logo">
      <span class="sidenav__logo-text">EA Workspace</span>
    </div>
  </div>

  <div class="sidenav__top">
    <div class="sidenav__nav">
      <button class="sidenav__item sidenav__item--active" title="Home">
        <span data-icon="home"></span>
        <span class="sidenav__item__label">Home</span>
      </button>
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

      <!-- My portfolio — expandable group -->
      <div class="sidenav__group">
        <button class="sidenav__item sidenav__group-toggle" title="My portfolio" aria-expanded="true">
          <span data-icon="layers-middle"></span>
          <span class="sidenav__item__label">My portfolio</span>
          <span class="sidenav__group-chevron" data-icon="chevron-up"></span>
        </button>
        <ul class="sidenav__subnav">
          <li class="sidenav__subnav-item">Applications</li>
          <li class="sidenav__subnav-item">Capabilities</li>
          <li class="sidenav__subnav-item">Tech debt</li>
        </ul>
      </div>

      <!-- Architecture Review Board — flat top-level item -->
      <button class="sidenav__item" title="Architecture Review Board">
        <span data-icon="rocketship"></span>
        <span class="sidenav__item__label">Architecture Review Board</span>
      </button>

      <!-- Architecture library — expandable group -->
      <div class="sidenav__group">
        <button class="sidenav__item sidenav__group-toggle" title="Architecture library" aria-expanded="true">
          <span data-icon="book-open"></span>
          <span class="sidenav__item__label">Architecture library</span>
          <span class="sidenav__group-chevron" data-icon="chevron-up"></span>
        </button>
        <ul class="sidenav__subnav">
          <li class="sidenav__subnav-item">TRM standards</li>
          <li class="sidenav__subnav-item">ADRs</li>
          <li class="sidenav__subnav-item">Diagrams</li>
          <li class="sidenav__subnav-item">Documents</li>
        </ul>
      </div>

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
