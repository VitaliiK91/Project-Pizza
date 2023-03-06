import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import { attachRouter } from '../router/index.js';
import '@vaadin/app-layout';
import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab.js';
import '@vaadin/horizontal-layout';
import '@vaadin/vertical-layout';

import 'pwa-helper-components/pwa-install-button.js';
import 'pwa-helper-components/pwa-update-available.js';
import '../components/contact-info.js';

@customElement('app-index')
export class AppIndex extends LitElement {
  @query('#outlet')
  private main!: HTMLElement;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }

    vaadin-tabs {
      --lumo-font-family: 'Pacifico', corbel, 'Lucida Grande',
        'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans',
        'Bitstream Vera Sans', 'Liberation Sans', verdana, 'Verdana Ref';
    }

    vaadin-app-layout {
      height: calc(100% - 200px);
    }

    footer {
      height: 200px;
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
        <pwa-install-button>
          <button>Install app</button>
        </pwa-install-button>

        <pwa-update-available>
          <button>Update app</button>
        </pwa-update-available>

        <!-- The main content is added / removed dynamically by the router -->
        <main id="outlet" role="main"></main>

        <footer>
          <contact-info
            .hours=${'12:00 - 22:00'}
            .phone=${'+7 (981) 264-58-24'}
            .email=${'info@pizzacafe.com'}
            .address=${'Приморская улица 64'}
            .geo=${'59.960979, 29.418738'}
          ></contact-info>
        </footer>
      </vaadin-app-layout>
    `;
  }

  firstUpdated() {
    attachRouter(this.main);
  }
}
