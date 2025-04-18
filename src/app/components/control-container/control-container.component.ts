import { Component, Input, ElementRef, Renderer2, ViewChildren, QueryList, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent, ControlStates } from "../control/control.component";
import { Container, Control } from '../../CreateControlAndContainer';
import { getContainerVars } from './container-setup';
import { FilterBarComponent } from "../../filter-bar/filter-bar.component";
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { Globals } from '../../CreateControlAndContainer';
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
  selectedFilters: string[] = []

  ngOnInit() {
    this.el.nativeElement.classList.add(this.container.containerId);
    getContainerVars(this.container.containerId!);
    
  }
  
  ngAfterViewInit() {
      this.controlArray = this.children.toArray();

  }
  selectFilters(tags: string[]) {
    Globals.containers = JSON.parse(JSON.stringify(Globals.containerReference))
    Globals.containers.forEach((container => {
      if (container.containerId == this.container.containerId)
      {
        this.container.controls = container.controls
      }
    }))
    this.container.controls.forEach((control => {
      console.log(control.controlId + " " + control.title! + ": " + control.tags)
    }))
    if (tags.length > 0) {
      this.container.controls = this.container.controls.filter(control => 
        control.tagsArray!.some(tag => tags.includes(tag))
      );
    }
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
