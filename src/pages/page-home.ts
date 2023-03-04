/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import config from '../config.js';
import { PageElement } from '../helpers/page-element.js';
import '../components/carousel.js';
import { appetizers } from '../stubs/menu-items.js';
import '../components/deal-card.js';
import '../components/deal-card-container.js';

@customElement('page-home')
export class PageHome extends PageElement {
  static styles = css`
    section {
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <section>
        <h1>Акции</h1>
        <deal-card-container>
          <deal-card
            .name=${'День рождения'}
            .description=${'Празднуйте свой день рождения с нами и получите скидку 20% на заказ из меню кухни!'}
            .deal=${'Скидка 20%'}
            .image=${'images/happy-b-day.jpg'}
          >
          </deal-card>

          <deal-card
            .name=${'Самовывоз'}
            .description=${'Забери свой заказ сам и получи сикдку 10%!'}
            .deal=${'Скидка 10%'}
            .image=${'images/pizza-to-go.jpg'}
          >
            >
          </deal-card>
        </deal-card-container>

        <carousel-component
          .items=${appetizers.map((pizza) => ({
            name: pizza.name,
            image: pizza.imageURL,
          }))}
        >
          ></carousel-component
        >

        <p>Here you can see <a href="/error">the not found page</a>.</p>
      </section>
    `;
  }

  meta() {
    return {
      title: config.appName,
      titleTemplate: null,
      description: config.appDescription,
    };
  }
}
