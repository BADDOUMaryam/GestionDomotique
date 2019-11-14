import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjetDomotiqueComponent } from './add-objet-domotique.component';

describe('AddObjetDomotiqueComponent', () => {
  let component: AddObjetDomotiqueComponent;
  let fixture: ComponentFixture<AddObjetDomotiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObjetDomotiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObjetDomotiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
