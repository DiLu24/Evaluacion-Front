import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactoComponent } from './new-contacto.component';

describe('NewContactoComponent', () => {
  let component: NewContactoComponent;
  let fixture: ComponentFixture<NewContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});