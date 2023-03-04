import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { PageElement } from '../helpers/page-element.js';
import '../components/menu-item.js';
import {
  pizza,
  appetizers,
  salads,
  soups,
  pastaAndRisotto,
  desert,
} from '../stubs/menu-items.js';

import '@vaadin/tabsheet';
import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab.js';
import '../components/tab-content.js';

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

  private sections = [
    { id: '0', label: 'Закуски', items: appetizers, imageSrc: '' },
    { id: '1', label: 'Салаты', items: salads, imageSrc: '' },
    { id: '2', label: 'Супы', items: soups, imageSrc: '' },
    { id: '3', label: 'Пицца', items: pizza, imageSrc: 'images/pepperoni.jpg' },
    { id: '4', label: 'Паста и ризотто', items: pastaAndRisotto, imageSrc: '' },
    { id: '5', label: 'Десерт', items: desert, imageSrc: '' },
  ];

  render() {
    return html`
      <section>
        <vaadin-tabsheet>
          <vaadin-tabs slot="tabs">
            ${repeat(
              this.sections,
              (section) => section.id,
              (section) =>
                html`
                  <vaadin-tab .id=${section.id}>${section.label}</vaadin-tab>
                `
            )}
          </vaadin-tabs>
          ${repeat(
            this.sections,
            (section) => section.id,
            (section) =>
              html`
                <tab-content tab=${section.id} .imageSrc=${section.imageSrc}>
                  ${repeat(
                    section.items,
                    (item) => item.name,
                    (item) => html`
                      <menu-item-card
                        .name=${item.name}
                        .description=${item.description}
                        .ingredients="${item.ingredients}"
                      ></menu-item-card>
                    `
                  )}
                </tab-content>
              `
          )}
        </vaadin-tabsheet>
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
