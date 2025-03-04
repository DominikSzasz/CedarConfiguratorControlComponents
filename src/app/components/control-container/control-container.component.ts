import { Component } from '@angular/core';
import { ControlComponent } from "../control/control.component";

@Component({
  selector: 'configurator-container',
  imports: [ControlComponent],
  templateUrl: './control-container.component.html',
  styleUrl: './control-container.component.less'
})
export class ControlContainerComponent {

}
