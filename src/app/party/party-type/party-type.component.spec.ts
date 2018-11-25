import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PartyTypeComponent } from './party-type.component';

describe('PartyTypeComponent', () => {
  let component: PartyTypeComponent;
  let fixture: ComponentFixture<PartyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
