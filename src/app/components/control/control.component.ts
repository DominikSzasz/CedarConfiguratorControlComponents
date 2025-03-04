import { Component } from '@angular/core';
enum ControlStates {
  unselected,
  defaultSelected,
  selected,
  disabled,
  hover,
  clicked
}
@Component({
  selector: 'configurator-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.less'
})
export class ControlComponent {
  state: ControlStates = ControlStates.unselected;
  cardImg = "assets/Rectangle.png"
  cardTitle = "PERGOLA UNO";
  cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad";

  ngOnInit() {
    const controlCard = document.querySelector('.control-card') as HTMLElement;
    const controlTitle = document.querySelector('.control-title') as HTMLElement;
    const controlText = document.querySelector('.control-text') as HTMLElement;
    const controlDivider = document.querySelector('.control-hr') as HTMLElement;

    if (this.state == ControlStates.disabled)
    {
      controlCard.style.backgroundColor = "var(--disabled-color)";
      controlCard.style.borderColor = "var(--disabled-border-color)";
      controlTitle.style.color = "var(--disabled-title-color)";
      controlText.style.color = "var(--disabled-text-color)";
      controlDivider.style.backgroundColor = "var(--disabled-divider-color)";
    }
    if (this.state == ControlStates.defaultSelected)
    {
      controlCard.style.backgroundColor = "var(--default-selected-color)";
    }

  }
  
  changeColor() {
    const controlCard = document.querySelector('.control-card') as HTMLElement;
    const controlTitle = document.querySelector('.control-title') as HTMLElement;
    const controlText = document.querySelector('.control-text') as HTMLElement;
    const controlDivider = document.querySelector('.control-hr') as HTMLElement;
    switch (this.state)
    {
      case 0:
        this.state = ControlStates.selected
        controlCard.style.backgroundColor = "var(--selected-color)";
        controlTitle.style.color = "var(--selected-title-color)";
        controlText.style.color = "var(--selected-text-color)";
        controlDivider.style.backgroundColor = "var(--selected-divider-color)";
        break;
      case 2:
        this.state = ControlStates.unselected
        controlCard.style.backgroundColor = "var(--unselected-color)";
        controlTitle.style.color = "var(--unselected-title-color)";
        controlText.style.color = "var(--unselected-text-color)";
        controlDivider.style.backgroundColor = "var(--unselected-divider-color)";
        break;
    }
  }
}
