import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlmMenuComponent } from './blm-menu.component';

describe('BlmMenuComponent', () => {
  let component: BlmMenuComponent;
  let fixture: ComponentFixture<BlmMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlmMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
