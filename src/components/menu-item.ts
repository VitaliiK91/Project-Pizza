import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

class MenuItemCard extends LitElement {
  @property({ type: String }) name = '';
  @property({ type: String }) description = '';
  @property({ type: Array }) ingredients: Array<string> = [];

  static get styles() {
    return css`
      .card {
        display: flex;
        flex-direction: column;
        padding: 16px;
        border: 1px solid var(--lumo-primary-color);
        border-radius: 4px;
        box-shadow: 0 2px 4px var(--lumo-shade-20pct);
      }

      .name {
        margin-bottom: 8px;
        color: var(--lumo-primary-color);
        font-weight: bold;
        font-size: 24px;
      }

      .description {
        margin-bottom: 16px;
        color: var(--lumo-primary-text-color);
      }

      .ingredient {
        display: inline-block;
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 4px 8px;
        border: 1px solid var(--lumo-primary-color);
        border-radius: 16px;
        color: var(--lumo-primary-color);
        font-weight: bold;
        font-size: 14px;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="name">${this.name}</div>
        <div class="description">${this.description}</div>
        <div>
          ${this.ingredients.map(
            (ingredient) =>
              html`<span class="ingredient">${ingredient}</span>`
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('menu-item-card', MenuItemCard);
