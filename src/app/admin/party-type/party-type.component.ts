import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-party-type',
  templateUrl: './party-type.component.html',
  styleUrls: ['./party-type.component.css']
})
export class PartyTypeComponent implements OnInit {

  public partyTypeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.partyTypeForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'desc': [null, Validators.required],
      'icon': [null, Validators.required],
    });

  }

}
