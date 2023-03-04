import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

interface DealCardProps {
  name: string;
  description: string;
  deal: string;
  image: string;
}

export class DealCard extends LitElement implements DealCardProps {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      height: 400px;
      padding: 1rem;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0 0 20px rgb(0 0 0 / 10%);
      transition: transform 0.3s ease-in-out;
    }

    :host(:hover) {
      transform: scale(1.05);
    }

    h2 {
      margin: 0;
      color: #ff4500;
      font-size: 2rem;
    }

    p {
      margin: 0 0 1rem;
      color: #666;
      font-size: 1rem;
      text-align: center;
    }

    .price {
      margin-top: auto;
      color: #ff4500;
      font-size: 2.5rem;
    }

    .image {
      width: 100%;
      height: 200px;
      border-radius: 8px;
      background-position: center;
      background-size: cover;
    }
  `;

  @property({ type: String })
  name: string;

  @property({ type: String })
  description: string;

  @property({ type: String })
  deal: string;

  @property({ type: String })
  image: string;

  constructor() {
    super();

    this.name = '';
    this.description = '';
    this.deal = '';
    this.image = '';
  }

  render() {
    return html`
      <div class="image" style="background-image: url(${this.image})"></div>
      <h2>${this.name}</h2>
      <h3 class="price">${this.deal}</h3>
      <p>${this.description}</p>
    `;
  }
}

customElements.define('deal-card', DealCard);
