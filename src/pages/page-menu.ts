/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { PageElement } from '../helpers/page-element.js';
import '../components/menu-item.js';

@customElement('page-menu')
export class PageMenu extends PageElement {
  static styles = css`
    section {
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <section>
        <h1>Menu</h1>
        <menu-item-card
          .image=${'https://mrmotopizza.com/wp-content/uploads/2022/09/Mr-Moto-Pizza-pepperoni.jpg'}
          .name=${'Pepperoni Pizza'}
          .description=${'A classic pizza with spicy pepperoni and mozzarella cheese'}
          .ingredients="${[
            'Pepperoni',
            'Mozzarella cheese',
            'Tomato sauce',
            'Basil',
          ]}"
        ></menu-item-card>
        <menu-item-card
          .image=${'https://mrmotopizza.com/wp-content/uploads/2022/09/Mr-Moto-Pizza-red-chunky-mess.jpg'}
          .name=${'Pepperoni Pizza'}
          .description=${'A classic pizza with spicy pepperoni and mozzarella cheese'}
          .ingredients="${[
            'Pepperoni',
            'Mozzarella cheese',
            'Tomato sauce',
            'Basil',
          ]}"
        ></menu-item-card>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>
      </section>
    `;
  }

  meta() {
    return {
      title: 'Menu',
      description: 'About page description',
    };
  }
}
