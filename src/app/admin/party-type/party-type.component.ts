import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators, FormBuilder } from '@angular/forms';
import { PartyTypeService } from '../../services/party-type.service';

@Component({
  selector: 'app-party-type',
  templateUrl: './party-type.component.html',
  styleUrls: ['./party-type.component.css']
})
export class PartyTypeComponent implements OnInit {

  public partyTypeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private partyTypeService: PartyTypeService
  ) { }

  ngOnInit() {

    this.partyTypeForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'desc': [null, Validators.required],
      'icon': [null, Validators.required],
    });

  }

  onSubmit() {
    this.partyTypeService.create(JSON.stringify(this.partyTypeForm.value)).subscribe((data: any) => {
      console.log(data);
    });
  }

}
