import { Component, ElementRef, Renderer2, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'filter-tag',
  imports: [CommonModule],
  templateUrl: './filter-tag.component.html',
  styleUrl: './filter-tag.component.less'
})
export class FilterTagComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() filterName: string = ""
  @Input() selected: string[] = []
  isSelected(): boolean {
    return this.selected.includes(this.filterName);
  }
  select() {
    if (this.selected.includes(this.filterName)) {
      this.selected.splice(this.selected.findIndex(item => item === this.filterName), 1);
    } else {
      this.selected.push(this.filterName);
    }
  }
}
