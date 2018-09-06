import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartymainComponent } from './partymain.component';

describe('PartymainComponent', () => {
  let component: PartymainComponent;
  let fixture: ComponentFixture<PartymainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartymainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartymainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
