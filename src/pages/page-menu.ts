/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { PageElement } from '../helpers/page-element.js';
import '../components/menu-item.js';
import { menuItems } from '../stubs/pizza.js';

@customElement('page-menu')
export class PageMenu extends PageElement {
  static styles = css`
    section {
      padding: 1rem;
    }
    menu-item-card {
      margin: 2px;
    }
  `;
  private items = menuItems;

  render() {
    return html`
      <section>
        <h1>Пицца</h1>
        ${repeat(
          this.items,
          (item) => item.name,
          (item, index) => html` <menu-item-card
            .imageURL=${item.imageURL}
            .name=${item.name}
            .description=${item.description}
            .ingredients="${item.ingredients}"
          ></menu-item-card>`
        )}
      </section>
    `;
  }

  meta() {
    return {
      title: 'Menu',
      description: 'Menu page description',
    };
  }
}
