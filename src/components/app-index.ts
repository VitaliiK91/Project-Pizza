import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

import { attachRouter, urlForName } from '../router/index.js';
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab.js';

import 'pwa-helper-components/pwa-install-button.js';
import 'pwa-helper-components/pwa-update-available.js';
import '../components/contact-info.js';

@customElement('app-index')
export class AppIndex extends LitElement {
  @query('#outlet')
  private main!: HTMLElement;

  static styles = css`
    vaadin-tabs {
      --lumo-font-family: 'Pacifico', corbel, 'Lucida Grande',
        'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans',
        'Bitstream Vera Sans', 'Liberation Sans', verdana, 'Verdana Ref';
    }
    .drawer-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: var(--lumo-space-m);
    }

    .drawer-tabs {
      margin-bottom: var(--lumo-space-m);
    }

    .contact-info {
      padding: var(--lumo-space-m);
      color: var(--lumo-primary-text-color);
      font-size: var(--lumo-font-size-m);
    }
  `;

  @state()
  get currentPage() {
    return location.pathname.split('/')[1];
  }

  get currentPageName() {
    switch (this.currentPage) {
      case 'home':
        return 'Главная';
      case 'menu':
        return 'Меню';
      case 'deals':
        return 'Акции';
      default:
        return this.currentPage;
    }
  }

  get selectedTab() {
    switch (this.currentPage) {
      case 'home':
        return 0;
      case 'menu':
        return 1;
      case 'deals':
        return 2;
      default:
        return -1;
    }
  }

  render() {
    return html`
      <pwa-install-button>
        <button>Install app</button>
      </pwa-install-button>

      <pwa-update-available>
        <button>Update app</button>
      </pwa-update-available>

      <vaadin-app-layout primary-section="drawer">
        <vaadin-drawer-toggle
          slot="navbar touch-optimized"
        ></vaadin-drawer-toggle>

        <h1 slot="navbar">${this.currentPageName}</h1>
        <div slot="drawer">
          <div class="drawer-content">
            <div class="drawer-tabs">
              <vaadin-tabs orientation="vertical" selected=${this.selectedTab}>
                <vaadin-tab id="home">
                  <a tabindex="-1" href=${urlForName('home')}>
                    <span>Главная</span>
                  </a>
                </vaadin-tab>

                <vaadin-tab id="menu">
                  <a tabindex="-1" href=${urlForName('menu')}>
                    <span>Меню</span>
                  </a>
                </vaadin-tab>

                <vaadin-tab id="deals">
                  <a tabindex="-1" href=${urlForName('deals')}>
                    <span>Акции</span>
                  </a>
                </vaadin-tab>
              </vaadin-tabs>
            </div>

            <div class="contact-info">
              <contact-info
                .hours=${'12:00 - 22:00'}
                .phone=${'+7 (981) 264-58-24'}
                .email=${'info@pizzacafe.com'}
                .address=${'Приморская улица 64'}
                .geo=${'59.960979, 29.418738'}
              ></contact-info>
            </div>
          </div>
        </div>

        <!-- The main content is added / removed dynamically by the router -->
        <main id="outlet" role="main"></main>
      </vaadin-app-layout>
    `;
  }

  firstUpdated() {
    attachRouter(this.main);
  }
}
