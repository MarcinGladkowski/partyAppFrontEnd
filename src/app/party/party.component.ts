import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  public partyForm: FormGroup;

  @ViewChild('modal') public modalRef: ModalDirective;

  constructor() { }

  showModal() {
    this.modalRef.show();
  }

  ngOnInit() {
    this.partyForm = new FormGroup({
      name: new FormControl(),
      desc: new FormControl(),
    });
  }

}
