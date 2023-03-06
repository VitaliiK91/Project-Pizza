/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { PageElement } from '../helpers/page-element.js';
import '../components/contact-info.js';

@customElement('page-contact')
export class PageContact extends PageElement {
  static styles = css`
    section {
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <section>
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
      title: 'Contact',
      description: 'Contact',
    };
  }
}
