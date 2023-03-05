import { LitElement, html, css } from 'lit';

import { MenuItem } from '../stubs/menu-items.js';

interface MenuSection {
  id: string;
  label: string;
  items: MenuItem[];
  imageSrc: string;
}

/**
 * The ID of the associated tab.
 *
 * @attr {string} tab
 */
class MenuSectionElement extends LitElement {
  static get properties() {
    return {
      section: { type: Object },
    };
  }

  static get styles() {
    return css`
      .menu-section {
        height: 100%;
        padding: 20px;
      }

      .menu-section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }

      .menu-section-label {
        font-weight: bold;
        font-size: 24px;
      }

      .menu-section-image {
        object-fit: cover;
        width: 100%;
        height: 450px;
        margin-left: 20px;
      }

      .menu-item {
        margin-bottom: 20px;
      }

      .menu-item-name {
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 20px;
      }

      .menu-item-price {
        margin-bottom: 5px;
        font-size: 16px;
      }

      .menu-item-description {
        margin-bottom: 5px;
        font-size: 16px;
      }

      .menu-item-ingredients {
        color: gray;
        font-size: 14px;
      }

      .menu-item-tags {
        margin-top: 5px;
        color: gray;
        font-size: 14px;
      }
    `;
  }

  section: MenuSection = {
    id: '',
    label: '',
    items: [],
    imageSrc: '',
  };

  render() {
    return html`
      <div class="menu-section">
        <div class="menu-section-header">
          <img
            class="menu-section-image"
            src="${this.section.imageSrc}"
            alt="${this.section.label}"
          />
        </div>
        ${this.section.items.map(
          (item) => html`
            <div class="menu-item">
              <div class="menu-item-name">${item.name}</div>
              <div class="menu-item-price">${item.price}&#8381;</div>
              <div class="menu-item-description">${item.description}</div>
              <div class="menu-item-ingredients">
                ${item.ingredients.join(', ')}
              </div>
              <div class="menu-item-tags">${item.tags.join(', ')}</div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('menu-section', MenuSectionElement);
