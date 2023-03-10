/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { PageElement } from '../helpers/page-element.js';
import '../components/deal-card.js';
import '../components/deal-card-container.js';

@customElement('page-deals')
export class PageDeals extends PageElement {
  static styles = css`
    section {
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <section>
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
          </deal-card>

          <deal-card
            .name=${'Пиво в подарок'}
            .description=${'Купите одно пиво до 4PM и получите второе бесплатно'}
            .deal=${'\u{1F37B}'}
            .image=${'images/beers.jpg'}
          >
          </deal-card>
        </deal-card-container>
      </section>
    `;
  }

  meta() {
    return {
      title: 'Акции',
      description: 'Акции',
    };
  }
}
