import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParentComponent } from './form-parent.component';

describe('FormParentComponent', () => {
  let component: FormParentComponent;
  let fixture: ComponentFixture<FormParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
