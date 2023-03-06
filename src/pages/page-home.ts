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
import '../components/deal-card.js';
import '../components/deal-card-container.js';

@customElement('page-home')
export class PageHome extends PageElement {
  static styles = css`
    section {
      padding: 1rem;
    }
  `;

  carouselItems = [
    {
      name: 'Банкеты',
      image:
        'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      name: 'Доставка',
      image: '',
    },
    {
      name: 'Акции',
      image: '',
    },
    {
      name: 'Пицца',
      image: '',
    },
  ];

  render() {
    return html`
      <section>
        <carousel-component .items=${this.carouselItems}></carousel-component>

        <deal-card-container>
          <deal-card
            .name=${'Меню'}
            .image=${'https://images.unsplash.com/photo-1557499305-bd68d0ad468d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80'}
          >
          </deal-card>

          <deal-card .name=${'Акции'} .image=${'images/happy-b-day.jpg'}>
          </deal-card>

          <deal-card .name=${'Доставка'} .image=${'images/happy-b-day.jpg'}>
          </deal-card>
        </deal-card-container>
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
