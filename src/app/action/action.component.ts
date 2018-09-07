import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  public activate = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {

    const hash = this.route.snapshot.paramMap.get('hash');

    this.userService.activate(JSON.stringify({'hash': hash}))
    .subscribe((data: any) => {
      if (data.status === 'ok') {
        this.activate = true;
      }
    });
  }
}
