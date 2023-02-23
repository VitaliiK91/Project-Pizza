import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('contact-info')
export class ContactInfo extends LitElement {
  static get styles() {
    return css`
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;
        border: 1px solid gray;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
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

  @property({ type: String })
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
      <div class="card">
        <div class="title">Контактная информация</div>
        <div class="hours">🕖 ${this.hours}</div>
        <div class="phone">
          📱 <a href="tel:${this.phone}">${this.phone}</a>
        </div>
        <div class="email">
          📧 <a href="mailto:${this.email}">${this.email}</a>
        </div>
        <div class="address">
          🌐
          <a href="geo:${this.geo}?q=${encodeURIComponent(this.address)}"
            >${this.address}</a
          >
        </div>
      </div>
    `;
  }
}
