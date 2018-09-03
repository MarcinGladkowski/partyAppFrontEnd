import { ElementRef, Component, OnInit, ViewChild, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements AfterContentInit {

  @ViewChild('content') public contentModal;
  @ViewChild('openModal') openModal;


    show() {
        this.contentModal.show();
        console.log(this.contentModal);
    }

    ngAfterContentInit() {
      this.openModal.click();
    }

}
