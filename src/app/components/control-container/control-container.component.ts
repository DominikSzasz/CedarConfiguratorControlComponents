import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from "../control/control.component";
// import { getContainerVars } from './container-setup';
import { Container, Control } from '../../CreateControlAndContainer';
@Component({
  selector: 'configurator-container',
  standalone: true,
  imports: [ControlComponent, CommonModule],
  templateUrl: './control-container.component.html',
  styleUrl: './control-container.component.less'
})
export class ControlContainerComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() titleInContainer:boolean = false
  @Input() container: Container = {
    containerId: '',
    containerInstance: '',
    search: false,
    filter: false,
    controls: []
  };
  
  ngOnInit() {

    // Use Renderer2 instead of direct DOM manipulation
    setTimeout(() => { // Wait for view to render
      const innerTitle = this.el.nativeElement.querySelector('.inner-title');
      const outerTitle = this.el.nativeElement.querySelector('.outer-title');
      
      if (innerTitle && outerTitle) {
        if (this.titleInContainer) {
          this.renderer.setStyle(outerTitle, 'display', 'none');
          this.renderer.setStyle(innerTitle, 'display', 'block');
        } else {
          this.renderer.setStyle(innerTitle, 'display', 'none');
          this.renderer.setStyle(outerTitle, 'display', 'block');
        }
      }
    });
  }
  
  // selectedControls: string[] = [];
  
  }
