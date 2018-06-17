import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { PartyListsService } from './party-lists.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAt9ym5lJu_8pguSVm6idX0nfQtgy-12dw',
      libraries: ['places']
    }),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    PartyListsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
