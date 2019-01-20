import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  @ViewChild('registerModal') public modal: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.modal.show();
  }

}
