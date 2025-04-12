import { Component, ElementRef, Renderer2, Input } from '@angular/core';
import { FilterTagComponent } from "../filter-tag/filter-tag.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'filter-bar',
  imports: [FilterTagComponent, CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.less'
})
export class FilterBarComponent {
selected:string[] = []
@Input() tags: string[] = []
displayselected() {
  console.log(this.selected)
}
ngOnInitI(){
  console.log(this.tags)
}

}
