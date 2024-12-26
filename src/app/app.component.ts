import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/header/app-header.component';
import { AppMenuComponent } from './components/menu/app-menu.component';

const components = [AppHeaderComponent, AppMenuComponent];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'payment-app';
}
