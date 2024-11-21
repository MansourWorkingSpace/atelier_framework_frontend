import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRFComponent } from './form-rf.component';

describe('FormRFComponent', () => {
  let component: FormRFComponent;
  let fixture: ComponentFixture<FormRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
