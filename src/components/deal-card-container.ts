import { LitElement, html, css } from 'lit';

export class DealCardContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      padding: 0 var(--lumo-space-s);
    }

    h2 {
      margin: var(--lumo-space-m) 0;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      font-size: var(--lumo-font-size-l);
      text-align: center;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      gap: var(--lumo-space-m) var(--lumo-space-s);
      justify-content: center;
      padding-bottom: var(--lumo-space-l);
    }

    ::slotted(deal-card) {
      width: 100%;
      max-width: 350px;
    }

    button {
      display: block;
      margin: 0 auto;
      padding: var(--lumo-space-m) var(--lumo-space-l);
      border: none;
      border-radius: 8px;
      background-color: var(--lumo-primary-color);
      color: var(--lumo-contrast-50pct);
      font-size: var(--lumo-font-size-s);
      font-family: var(--lumo-font-family);
      text-transform: uppercase;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }

    button::before {
      content: '📞';
      margin-right: var(--lumo-space-s);
    }

    button:hover {
      background-color: var(--lumo-primary-color-10pct);
    }

    @media (min-width: 768px) {
      .container {
        justify-content: space-between;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
      <button>Заказать сейчас</button>
    `;
  }
}

customElements.define('deal-card-container', DealCardContainer);
