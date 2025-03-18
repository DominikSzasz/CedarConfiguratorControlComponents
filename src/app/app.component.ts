import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlComponent } from "./components/control/control.component";
import { ControlContainerComponent } from "./components/control-container/control-container.component";
import { setupControlContainer } from './control-container-setup';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlComponent, ControlContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'CedarConfiguratorControl';
  ngOnInit()
  {
    setupControlContainer()
  }
}
