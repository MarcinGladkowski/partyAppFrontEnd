import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() openRegistration = new EventEmitter();
  @Output() openLogin = new EventEmitter();
  @Output() openParty = new EventEmitter();

  openRegistrationModal () {
    this.openRegistration.emit();
  }

  openLoginModal() {
    this.openLogin.emit();
  }

  openPartyModal() {
    this.openParty.emit();
  }

  constructor() { }


  ngOnInit() {
  }

}
