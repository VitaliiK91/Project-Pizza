import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

class MenuItemCard extends LitElement {
  @property({ type: String }) imageURL = '';
  @property({ type: String }) name = '';
  @property({ type: String }) description = '';
  @property({ type: Array }) ingredients: Array<string> = [];

  static get styles() {
    return css`
      .card {
        display: flex;
        flex-direction: column;
        padding: 16px;
        border: 1px solid gray;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
      }

      .content {
        display: flex;
        flex-direction: column;
      }

      .image-container {
        width: 100%;
        margin-bottom: 16px;
      }

      .image {
        object-fit: cover;
        width: 100%;
        height: 200px;
        border-radius: 4px;
      }

      .name {
        margin-bottom: 8px;
        font-weight: bold;
        font-size: 24px;
      }

      .description {
        margin-bottom: 16px;
      }

      .ingredient {
        display: inline-block;
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 4px 8px;
        border: 1px solid gray;
        border-radius: 16px;
        font-weight: bold;
        font-size: 14px;
      }

      @media (min-width: 768px) {
        .card {
          flex-direction: row;
        }

        .content {
          flex: 1;
          padding-left: 16px;
        }

        .image-container {
          width: 50%;
          margin-right: 16px;
          margin-bottom: 0;
        }

        .image {
          height: auto;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="image-container">
          <img class="image" src="${this.imageURL}" alt="${this.name}" />
        </div>
        <div class="content">
          <div class="name">${this.name}</div>
          <div class="description">${this.description}</div>
          <div>
            ${this.ingredients.map(
              (ingredient) =>
                html`<span class="ingredient">${ingredient}</span>`
            )}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('menu-item-card', MenuItemCard);
