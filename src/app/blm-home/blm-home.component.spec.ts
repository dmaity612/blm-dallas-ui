import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlmHomeComponent } from './blm-home.component';

describe('BlmHomeComponent', () => {
  let component: BlmHomeComponent;
  let fixture: ComponentFixture<BlmHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlmHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
