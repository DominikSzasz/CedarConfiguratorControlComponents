import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter-tag',
  imports: [],
  templateUrl: './filter-tag.component.html',
  styleUrl: './filter-tag.component.less'
})
export class FilterTagComponent {
  @Input() filterName: string = ""
}
