import { Component, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { FilterTagComponent } from "../filter-tag/filter-tag.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'filter-bar',
  imports: [FilterTagComponent, CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.less'
})
export class FilterBarComponent {
@Input() selected:string[] = []
@Input() tags: string[] = []
@Output() selectFilters: EventEmitter<string[]> = new EventEmitter();
displayselected() {
  console.log(this.selected)
}
selectNewFilters()
{
  this.selectFilters.emit(this.selected)
}
removeAllFilters()
{
  this.selected = []
  this.selectNewFilters()
}
}
