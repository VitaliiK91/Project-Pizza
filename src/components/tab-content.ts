import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * The ID of the associated tab.
 *
 * @attr {string} tab
 */
class TabContent extends LitElement {
      @property({ type: String })
      imageSrc: string;
      @property({ type: String })
      sectionName: string;
      @property({ type: String })
      sectionNamePosition: string;

  constructor() {
    super();
    this.imageSrc = '';
    this.sectionName = '';
    this.sectionNamePosition = 'over';
  }

  static get styles() {
    return css`
      .container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      img {
        object-fit: cover;
        max-width: 100%;
        height: auto;
      }

      .section-name {
        position: absolute;
        color: white;
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
      }

      .section-name-over {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .section-name-under {
        bottom: 0;
        width: 100%;
        padding: 1rem;
        background: rgb(0 0 0 / 60%);
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <img src="${this.imageSrc}" alt="${this.sectionName}" />
        <div class="section-name ${
          this.sectionNamePosition === 'over' ? 'section-name-over' : 'section-name-under'
        }">${this.sectionName}</div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('tab-content', TabContent);
