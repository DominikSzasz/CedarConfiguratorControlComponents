import { Component, Input, ElementRef, Renderer2, ViewChildren, QueryList, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent, ControlStates } from "../control/control.component";
import { Container, Control } from '../../CreateControlAndContainer';
import { getContainerVars } from './container-setup';
import { FilterBarComponent } from "../../filter-bar/filter-bar.component";
import { SearchBarComponent } from '../../search-bar/search-bar.component';
@Component({
  selector: 'configurator-container',
  standalone: true,
  imports: [ControlComponent, CommonModule, FilterBarComponent, SearchBarComponent],
  templateUrl: './control-container.component.html',
  styleUrl: './control-container.component.less'
})
export class ControlContainerComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @ViewChildren(ControlComponent) children!: QueryList<ControlComponent>;
  controlArray: ControlComponent[] = [];
    

  @Input() container: Container = {
    containerId: '',
    containerInstance: '',
    search: false,
    filter: false,
    controls: []
  };
  @Input() containerDivider: boolean = false
  @Input() containerTitleInside: boolean = false
  @Input() containerTitle: string = ""
  @Input() tags: string[] = []

  ngOnInit() {
    this.el.nativeElement.classList.add(this.container.containerId);
    getContainerVars(this.container.containerId!);
  }
  
  ngAfterViewInit() {
      this.controlArray = this.children.toArray();
      console.log(this.tags)

  }
  selectedControl: string = "";
  changeSelected(index: number)
  {
    for (let i = 0; i < this.controlArray.length; i++) {
      this.controlArray[i].changeState(ControlStates.unselected)
    }
    this.controlArray[index].changeState(ControlStates.selected)
    this.selectedControl = this.controlArray[index].controlId
    console.log("selected: " + this.selectedControl)
  }
}
