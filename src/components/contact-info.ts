import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class ContactInfo extends LitElement {
  static get styles() {
    return css`
      .contact-info {
        padding: var(--lumo-space-m);
        color: var(--lumo-primary-text-color);
        font-size: var(--lumo-font-size-m);
      }

      .contact-info h2 {
        margin-top: 0;
        margin-bottom: var(--lumo-space-xs);
        font-size: var(--lumo-font-size-xl);
      }

      .contact-info .info-row {
        margin-bottom: var(--lumo-space-m);
      }

      .contact-info .info-row:last-child {
        margin-bottom: 0;
      }

      .contact-info .info-row label {
        display: block;
        margin-bottom: var(--lumo-space-xs);
        font-weight: bold;
        font-size: var(--lumo-font-size-s);
      }

      .contact-info .info-row span {
        font-size: var(--lumo-font-size-s);
      }

      .contact-info .map-link {
        display: block;
        margin-top: var(--lumo-space-s);
        color: var(--lumo-primary-color);
        font-size: var(--lumo-font-size-s);
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
      <div class="contact-info">
        <div class="info-row">
          <label>Часы работы:</label>
          <span>${this.hours}</span>
        </div>
        <div class="info-row">
          <label>Телфон:</label>
          <span>${this.phone}</span>
        </div>
        <div class="info-row">
          <label>Email:</label>
          <span>${this.email}</span>
        </div>
        <div class="info-row">
          <label>Адрес:</label>
          <span>${this.address}</span>
        </div>
        <a
          class="map-link"
          href="https://www.google.com/maps/place/${this.geo}"
          target="_blank"
          rel="noopener"
        >
          Найти на карте
        </a>
      </div>
    `;
  }

  // render() {
  //   return html`
  //     <div class="hours">🕖 ${this.hours}</div>
  //     <div class="phone">📱 <a href="tel:${this.phone}">${this.phone}</a></div>
  //     <div class="email">
  //       📧 <a href="mailto:${this.email}">${this.email}</a>
  //     </div>
  //     <div class="address">
  //       🌐
  //       <a href="geo:${this.geo}?q=${encodeURIComponent(this.address)}"
  //         >${this.address}</a
  //       >
  //     </div>
  //   `;
  // }
}

customElements.define('contact-info', ContactInfo);
