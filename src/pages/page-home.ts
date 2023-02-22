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
            .name=${'Пепперони пицца'}
            .description=${'Специальное предложение - пепперони пицца всего за 500 руб!'}
            .price=${500}
          >
          </deal-card>
          <deal-card
            .name=${'Греческий салат'}
            .description=${'Специальное предложение - греческий салат всего за 290 руб!'}
            .price=${290}
          >
          </deal-card>

          <deal-card
            .name=${'Спагетти карбонара'}
            .description=${'Специальное предложение - спагетти карбонара всего за 450 руб!'}
            .price=${450}
          >
          </deal-card>

          <deal-card
            .name=${'Десерт Тирамису'}
            .description=${'Специальное предложение - десерт Тирамису всего за 250 руб!'}
            .price=${250}
          >
          </deal-card>

          <deal-card
            .name=${'Чизкейк Нью-Йорк'}
            .description=${'Специальное предложение - чизкейк Нью-Йорк всего за 350 руб!'}
            .price=${350}
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

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

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
