import {Component, OnInit, ViewChild} from '@angular/core';
import { ModalDirective} from 'angular-bootstrap-md';
import {Router} from '@angular/router';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.scss']
})
export class SaveModalComponent implements OnInit {

  @ViewChild('savePartyModal') modal: ModalDirective;
  private party: any;

  constructor(private router: Router) { }

  ngOnInit() {}

  show(party) {
    this.party = party;
    this.modal.show();
  }

  toInvite() {
    this.router.navigate([`/party/invite/${this.party._id}`]);
  }
}
