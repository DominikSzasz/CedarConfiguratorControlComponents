import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlComponent } from "./components/control/control.component";
import { ControlContainerComponent } from "./components/control-container/control-container.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlComponent, ControlContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'CedarConfiguratorControl';
}
