import { LitElement, html, css } from 'lit';

export class DealCardContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 960px;
      margin: 0 auto;
      padding: 0 10px;
    }

    h2 {
      margin: 20px 0;
      font-weight: 500;
      font-size: 24px;
      text-align: center;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      padding-bottom: 50px;
    }

    ::slotted(deal-card) {
      width: 100%;
      max-width: 350px;
    }

    @media (min-width: 768px) {
      .container {
        justify-content: space-between;
      }
    }
  `;

  render() {
    return html`
      <h2>Специальные предложения</h2>
      <div class="container">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('deal-card-container', DealCardContainer);
