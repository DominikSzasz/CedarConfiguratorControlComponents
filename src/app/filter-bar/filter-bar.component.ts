import { Component, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { FilterTagComponent } from "../filter-tag/filter-tag.component";
import { CommonModule } from '@angular/common';
import { GlobalValues } from '../control-container-setup';

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
@Input() disabled = false
@Input() filterId: string = "";

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

ngOnInit()
{
  const elements = document.getElementsByClassName("container");
  const styles = GlobalValues.searchFilterTypes[this.filterId];
  console.log(styles)

      if (styles) {
      //   console.log(styles['ControllBoxSearch'])
      //   console.log(styles['ControllBoxFilter'])
        Array.from(elements).forEach(element => {
          Object.entries(styles).forEach(([cssVar, value]) => {

            if (typeof cssVar === 'string' && typeof value === 'string') {
              // console.log("test")

              Object.entries(GlobalValues.projGlob).forEach(([globKey, globValue]) => {
                  // if (value == globKey)
                  // {
                  //     value = globValue
                  // }
              });
              
              (element as HTMLElement).style.setProperty(cssVar, value, 'important');
              // console.log( cssVar, value)
          }
          });
        });
      }
    }
}



//
//
//
//      Parameter control sets not working but needed
//
//
//