import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

interface DealCardProps {
  name: string;
  description: string;
  price: number;
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
      font-size: 1.5rem;
    }

    h3 {
      margin: 0;
      font-size: 1.2rem;
    }

    .price {
      margin-top: auto;
      font-size: 2rem;
    }
  `;


  constructor() {
    super();

    this.name = '';
    this.description = '';
    this.price = 0;
  }
  @property({ type: String })
    name: string;
  @property({ type: String })
    description: string;
  @property({ type: Number })
    price: number;

  render() {
    return html`
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <h3 class="price">${this.price} руб</h3>
    `;
  }
}

customElements.define('deal-card', DealCard);
