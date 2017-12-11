import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmCreationComponent } from './mm-creation.component';

describe('MmCreationComponent', () => {
  let component: MmCreationComponent;
  let fixture: ComponentFixture<MmCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
