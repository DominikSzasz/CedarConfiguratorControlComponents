import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { ControlComponent } from "./components/control/control.component";
import { ControlContainerComponent } from "./components/control-container/control-container.component";
import controlDatabase from "../../content/control_developement.json";
import { getContainers } from './CreateControlAndContainer';
import { Globals, Container } from './CreateControlAndContainer';
import { getProjGlobals, GlobalValues } from './control-container-setup';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlComponent, ControlContainerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})

export class AppComponent implements OnInit {
  title = 'CedarConfiguratorControl';
  containers: Container[] = [];

  ngOnInit() {
    getContainers();
    this.containers = [...Globals.containers];
    getProjGlobals();
  }
}
