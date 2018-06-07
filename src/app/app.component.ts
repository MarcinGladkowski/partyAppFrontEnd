import { NgModule, Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tu będzie aplikacja party-app';

  apiKey = 'AIzaSyAt9ym5lJu_8pguSVm6idX0nfQtgy-12dw';

  lat = 50.254968;
  lng = 19.0275632;

  devices = [
    {
      latitude: 50.254968,
      longitude: 19.0275632
    },
    {
      latitude: 50.2548661,
      longitude: 19.0350241
    }
  ];

}
