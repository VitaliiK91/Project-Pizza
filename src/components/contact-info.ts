import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class ContactInfo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;

        color: var(--lumo-primary-text-color);
        font-weight: var(--lumo-font-weight-bold);
        font-size: var(--lumo-font-size-xl);
      }

      .title {
        margin-bottom: 16px;
        font-weight: bold;
        font-size: 24px;
      }

      .hours {
        margin-bottom: 8px;
      }

      .phone {
        margin-bottom: 8px;
      }

      .email {
        margin-bottom: 8px;
      }

      .address {
        margin-bottom: 8px;
      }
    `;
  }

  @property({ type: String, attribute: true })
  hours = '';
  @property({ type: String })
  phone = '';
  @property({ type: String })
  email = '';
  @property({ type: String })
  address = '';
  @property({ type: String })
  geo = '';

  render() {
    return html`
      <div class="hours">🕖 ${this.hours}</div>
      <div class="phone">📱 <a href="tel:${this.phone}">${this.phone}</a></div>
      <div class="email">
        📧 <a href="mailto:${this.email}">${this.email}</a>
      </div>
      <div class="address">
        🌐
        <a href="geo:${this.geo}?q=${encodeURIComponent(this.address)}"
          >${this.address}</a
        >
      </div>
    `;
  }
}

customElements.define('contact-info', ContactInfo);
