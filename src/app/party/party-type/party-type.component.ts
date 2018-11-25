import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PartyTypeService } from '../../services/party-type.service';

@Component({
  selector: 'app-party-type',
  templateUrl: './party-type.component.html',
  styleUrls: ['./party-type.component.css']
})
export class PartyTypeComponent implements OnInit {

  public partyTypeForm: FormGroup;
  public fileUpload: File = null;

  constructor(
    private formBuilder: FormBuilder,
    private partyTypeService: PartyTypeService
  ) { }

  ngOnInit() {

    this.partyTypeForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'desc': [null, Validators.required],
      'path': [null, Validators.required]
    });

  }

  onSubmit() {

    this.partyTypeService.create(this.partyTypeForm.value).subscribe((data: any) => {
      // console.log(data);
    });

  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {

      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.fileUpload = file;

        console.log('test');

        this.partyTypeService.upload(this.fileUpload).subscribe(res => {
          console.log(res);
        });

      };
    }
  }

}
