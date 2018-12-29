import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyInviteComponent } from './party-invite.component';

describe('PartyInviteComponent', () => {
  let component: PartyInviteComponent;
  let fixture: ComponentFixture<PartyInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
