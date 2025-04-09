import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FilterTagComponent } from "../filter-tag/filter-tag.component";

@Component({
  selector: 'filter-bar',
  imports: [FilterTagComponent],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.less'
})
export class FilterBarComponent {
selected:string[] = []
displayselected() {
  console.log(this.selected)
}

}
