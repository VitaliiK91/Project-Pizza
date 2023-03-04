import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { PageElement } from '../helpers/page-element.js';
import '../components/menu-item.js';
import {
  MenuItem,
  pizza,
  appetizers,
  salads,
  soups,
  pastaAndRisotto,
  desert,
} from '../stubs/menu-items.js';

import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab.js';

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

  @state()
  currentSectionID = 0;
  get currentSection(): { id: string; label: string; items: MenuItem[] } {
    return this.sections[this.currentSectionID];
  }

  private sections = [
    { id: '0', label: 'Закуски', items: appetizers },
    { id: '1', label: 'Салаты', items: salads },
    { id: '2', label: 'Супы', items: soups },
    { id: '3', label: 'Пицца', items: pizza },
    { id: '4', label: 'Паста и ризотто', items: pastaAndRisotto },
    { id: '5', label: 'Десерт', items: desert },
  ];

  render() {
    return html`
      <section>
        <vaadin-tabs
          @selected-changed=${(e: CustomEvent<{ value: number }>) =>
            (this.currentSectionID = e.detail.value)}
        >
          ${repeat(
            this.sections,
            (section) => section.id,
            (section) =>
              html`<vaadin-tab .value=${section.id} .title=${section.label}
                >${section.label}</vaadin-tab
              >`
          )}
        </vaadin-tabs>
        ${repeat(
          this.currentSection.items,
          (item) => item.name,
          (item) => html` <menu-item-card
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
