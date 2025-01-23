import { Component, h, Prop, State } from '@stencil/core';

export type IItem = {
  id: number;
  label: string;
  selected: boolean
};

@Component({
  tag: 'app-dropdown',
  styleUrl: 'dropdown.css',
  scoped: true,
})
export class Dropdown {
  @State() isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @Prop({mutable: true}) selectedItems: number[];

  handleItemClick = (event) => {
    this.selectedItems = [event.detail];
    this.isOpen = false;
    this.items = [...this.items]
  }

  @Prop()
  items: IItem[];

  isSelected(item) {
    return this.selectedItems.includes(item.id);
  }
  selectableListElement;

  render() {
    this.items.forEach((item: IItem) => {
      item.selected = this.selectedItems.includes(item.id);
    });

    const items: IItem[] = this.items.map((item: IItem) => (
      <app-dropdown-item
        label={item.label}
        selected={this.isSelected(item)}
        uid={item.id}
        onItemSelected={this.handleItemClick}
        key={String(item.id)}
      ></app-dropdown-item>
    ));

    return (
      <div class="dropdown" >
        <button onClick={() => this.toggleDropdown()}>
          Toggle Dropdown
        </button>
        <dialog open={this.isOpen}>
            <div class="dropdown-menu" slot="scroll-box" ref={(el) => (this.selectableListElement = el)}>
              {items}
            </div>
        </dialog>

      </div>
    );
  }
}
