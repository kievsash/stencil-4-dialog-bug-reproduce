import { Component, h } from '@stencil/core';
import { IItem } from '../dropdown/dropdown';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  items: IItem[] = [
    { id: 1, label: 'Item 1', selected: false },
    { id: 2, label: 'Item 2', selected: true },
    { id: 3, label: 'Item 3', selected: false },
    { id: 4, label: 'Item 4', selected: false },
    { id: 5, label: 'Item 5', selected: false },
    { id: 6, label: 'Item 6', selected: false },
    { id: 7, label: 'Item 7', selected: false },
    { id: 8, label: 'Item 8', selected: false },
  ];

  render() {
    return (
      <div class="app-home">
        <app-dropdown
          items={this.items}
          selectedItems={[2]}
        ></app-dropdown>
      </div>
    );
  }
}
