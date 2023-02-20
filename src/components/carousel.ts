import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';

interface CarouselItem {
  name: string;
  image: string;
}

export class Carousel extends LitElement {
  @property({ type: Array }) items: CarouselItem[] = [];
  @property({ type: Boolean }) autoplay = true;
  @property({ type: Number }) autoplayDelay = 5000;
  @state() currentSlide = 0;
  private timerId?: NodeJS.Timer;

  static styles = css`
    .carousel {
      position: relative;
      overflow: hidden;
    }

    .slide-container {
      display: flex;
      flex-wrap: nowrap;
      transition: transform 0.5s ease-in-out;
    }

    .slide {
      flex: 0 0 100%;
    }

    .image {
      object-fit: cover;
      width: 100%;
      height: auto;
    }

    .caption {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 16px;
      background-color: rgb(0 0 0 / 70%);
      color: white;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.startAutoplay();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAutoplay();
  }

  override updated(
    changedProperties: Map<string, { autoplay: boolean; auto: boolean }>
  ) {
    if (
      changedProperties.has('autoplay') ||
      changedProperties.has('autoplayDelay')
    ) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }

  render() {
    return html`
      <div class="carousel">
        <div
          class="slide-container"
          style="transform: translateX(-${this.currentSlide * 100}%)"
        >
          ${this.items.map(
            (item) => html`
              <div class="slide">
                <img class="image" src="${item.image}" alt="${item.name}" />
                <div class="caption">${item.name}</div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  private startAutoplay() {
    if (this.autoplay) {
      this.stopAutoplay();
      this.timerId = setInterval(() => {
        this.nextSlide();
      }, this.autoplayDelay);
    }
  }

  private stopAutoplay() {
    clearInterval(this.timerId);
  }

  private nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
  }
}

customElements.define('carousel-component', Carousel);
