import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlmEmailComponent } from './blm-email.component';

describe('BlmEmailComponent', () => {
  let component: BlmEmailComponent;
  let fixture: ComponentFixture<BlmEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlmEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlmEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
