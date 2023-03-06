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
:host {
      height: 100%;
    }
      .menu-section {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding: 20px;
      }


      .menu-section-header {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(3px);
      }

      .menu-section-container {
        display: flex;
        flex: 1 1 auto;
        flex-wrap: wrap;
        gap: var(--lumo-space-m) var(--lumo-space-m);
        justify-content: space-around;
        padding-bottom: var(--lumo-space-l);
      }
      
      .menu-item {
        box-sizing: border-box;
        min-width: 300px;
        margin-bottom: 20px;
        padding: 20px;
        padding: 1rem;
         border: 1px solid var(--lumo-primary-color);
        border-radius: 8px;
        background-color: white;
        background-color: var(--lumo-base-color);
        box-shadow: 0 0 20px var(--lumo-box-shadow-l);
        transition: transform 0.3s ease-in-out;
      }
      .menu-item:hover {
        transform: scale(1.05);
      }
      
      @media screen and (max-width: 768px) {
        .menu-item {
          flex-basis: calc(50% - 10px);
        }
      }
      
      @media screen and (max-width: 480px) {
        .menu-item {
          flex-basis: 100%;
        }
      }
      
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        .menu-section-container {
          justify-content: center;
        }
        
        .menu-item {
          flex-basis: calc(25% - 10px);
        }
      }
      
      @media screen and (min-width: 1025px) {
        .menu-item {
          flex-basis: calc(20% - 10px);
        }
      }
      

      
      .menu-item-name {
        font-weight: bold;
      }
      
      .menu-item-price {
        margin-left: auto;
        font-weight: bold;
        font-size: 20px;
      }
      
      .menu-item-ingredients {
        display:none;
        padding-left: 10px;
        font-size: 10px;
      }
      
      .menu-item-ingredient {
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 10px;
      }
      
      .menu-item-ingredient::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: gray;
        transform: translateY(-50%);
      }
      
      .menu-item-ingredient-text {
        margin-left: 10px;
        color: gray;
      }
       
      .menu-item-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        margin-right: 10px;
        border-radius: 50%;
        background-color: #f5f5f5;
      }
      
      .menu-item-icon i {
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
        <div class="menu-section-header" style="background-image: url(${this.section.imageSrc});"></div>
        <div class="menu-section-container">
          ${this.section.items.map(
            (item) => html`
              <div class="menu-item">
                  <h2 class="menu-item-name">${item.name}</h2>
                  <div class="menu-item-description">${item.description}</div>
                  <div class="menu-item-ingredients">
                  ${item.ingredients.map(ingredient => html`
                    <div class="menu-item-ingredient">
                      <div class="menu-item-ingredient-icon"></div>
                      <div class="menu-item-ingredient-text">${ingredient}</div>
                    </div>
                  `)}
                </div>
                  <div class="menu-item-price">${item.price}<span class="menu-item-icon">₽</span></div>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
          }
        }
        customElements.define('menu-section', MenuSectionElement);    