import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTDComponent } from './form-td.component';

describe('FormTDComponent', () => {
  let component: FormTDComponent;
  let fixture: ComponentFixture<FormTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
