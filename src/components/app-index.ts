import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import config from '../config.js';
import { attachRouter, urlForName } from '../router/index.js';
import '@vaadin/app-layout';
import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab.js';

import 'pwa-helper-components/pwa-install-button.js';
import 'pwa-helper-components/pwa-update-available.js';

@customElement('app-index')
export class AppIndex extends LitElement {
  @query('#outlet')
  private main!: HTMLElement;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    vaadin-tabs {
      --lumo-font-family: 'Pacifico', corbel, 'Lucida Grande',
        'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans',
        'Bitstream Vera Sans', 'Liberation Sans', verdana, 'Verdana Ref';
    }

    main {
      flex: 1;
    }

    vaadin-app-layout {
      height: 100%;
    }

    footer {
      padding: 1rem;
      background-color: #eee;
      color: #666;
      font-size: 14px;
      text-align: center;
    }

    main:empty ~ footer {
      display: none;
    }
  `;

  render() {
    return html`
      <vaadin-app-layout>
        <vaadin-tabs>
          <vaadin-tab><a href="${urlForName('home')}">Главная</a></vaadin-tab>
          <vaadin-tab><a href="${urlForName('menu')}">Меню</a></vaadin-tab>
          <vaadin-tab
            ><a href="${urlForName('deals')}"
              >Специальные предложения</a
            ></vaadin-tab
          >
          <vaadin-tab
            ><a href="${urlForName('contact')}">Контакты</a></vaadin-tab
          >
        </vaadin-tabs>

        <pwa-install-button>
          <button>Install app</button>
        </pwa-install-button>

        <pwa-update-available>
          <button>Update app</button>
        </pwa-update-available>

        <!-- The main content is added / removed dynamically by the router -->
        <main id="outlet" role="main"></main>
      </vaadin-app-layout>

      <footer>
        <span>Environment: ${config.environment}</span>
      </footer>
    `;
  }

  firstUpdated() {
    attachRouter(this.main);
  }
}
