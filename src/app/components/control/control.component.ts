import { Component, Input, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getControlVars } from './control-setup';
export enum ControlStates {
  unselected,
  defaultSelected,
  selected,
  disabled,
  hover,
  clicked
}

@Component({
  selector: 'configurator-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.less'
})
export class ControlComponent {
  @Input() cardImg: string = "";
  @Input() cardTitle: string = "";
  @Input() cardText: string = "";
  @Input() controlId: string = "";
  @Input() controlType: string = ""
  @Input() selectedControls: string[] = [];
  @Output() changeSelected: EventEmitter<void> = new EventEmitter();

  state: ControlStates = ControlStates.unselected;
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  ngAfterViewInit() {
    this.el.nativeElement.classList.add(this.controlType);
    getControlVars(this.controlType);
    const controlCard = this.el.nativeElement.querySelector('.control-card');
    const controlTitle = this.el.nativeElement.querySelector('.control-title');
    const controlText = this.el.nativeElement.querySelector('.control-text');
    const controlDivider = this.el.nativeElement.querySelector('.control-hr');
    
    if (this.state == ControlStates.disabled) {
      controlCard.style.backgroundColor = "var(--disabled-color)";
      controlCard.style.borderColor = "var(--disabled-border-color)";
      controlTitle.style.color = "var(--disabled-title-color)";
      controlText.style.color = "var(--disabled-text-color)";
      controlDivider.style.backgroundColor = "var(--disabled-divider-color)";
    }
    if (this.state == ControlStates.defaultSelected) {
      controlCard.style.backgroundColor = "var(--default-selected-color)";
      controlCard.style.borderColor = "var(--default-selected-border-color)";
      controlTitle.style.color = "var(--default-selected-title-color)";
      controlText.style.color = "var(--default-selected-text-color)";
      controlDivider.style.backgroundColor = "var(--default-selected-divider-color)";
    }
  }
  
  changeState(selectionState: ControlStates) {
    const controlCard = this.el.nativeElement.querySelector('.control-card');
    const controlTitle = this.el.nativeElement.querySelector('.control-title');
    const controlText = this.el.nativeElement.querySelector('.control-text');
    const controlDivider = this.el.nativeElement.querySelector('.control-hr');
    
    switch (selectionState) {
      case ControlStates.selected:
        this.state = ControlStates.selected;
        controlCard.style.backgroundColor = "var(--selected-color)";
        controlCard.style.borderColor = "var(--selected-border-color)";
        controlTitle.style.color = "var(--selected-title-color)";
        controlText.style.color = "var(--selected-text-color)";
        controlDivider.style.backgroundColor = "var(--selected-divider-color)";
        break;
        
      case ControlStates.unselected:
        this.state = ControlStates.unselected;
        controlCard.style.backgroundColor = "var(--unselected-color)";
        controlCard.style.borderColor = "var(--unselected-border-color)";
        controlTitle.style.color = "var(--unselected-title-color)";
        controlText.style.color = "var(--unselected-text-color)";
        controlDivider.style.backgroundColor = "var(--unselected-divider-color)";
        break;
    }
  }
  selectControl()
  {
    this.changeSelected.emit()
  }
}
