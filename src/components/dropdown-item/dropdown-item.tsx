import { Component, EventEmitter, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'app-dropdown-item',
  styleUrl: 'dropdown-item.css',
  scoped: true,
})
export class DropdownItem {
  @Prop() label!: string;
  @Prop() selected: boolean = false;
  @Prop() uid!: number;

  @Event() itemSelected!: EventEmitter<number>;

  handleClick = ()=> {
    this.itemSelected.emit(this.uid);
  }
  render() {
    return (
      <div class={{
        "dropdown-item": true,
        "dropdown-selected": this.selected
      }} onClick={this.handleClick}>
        {this.label}
      </div>
    );
  }
}
