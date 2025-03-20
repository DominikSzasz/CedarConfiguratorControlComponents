import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from "../control/control.component";
import controlDatabase from "../../../../content/control_developement.json";
import { getContainerTypes } from '../../control-container-setup';

@Component({
  selector: 'configurator-container',
  standalone: true,
  imports: [ControlComponent, CommonModule],
  templateUrl: './control-container.component.html',
  styleUrl: './control-container.component.less'
})
export class ControlContainerComponent {
  ngOnInit()
  {
    getContainerTypes()
  }
  selectedControls: string[] = [];
  
  controlsData = controlDatabase.database[0].Control;
 
}
