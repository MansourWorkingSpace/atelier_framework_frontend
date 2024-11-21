import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeesSComponent } from './list-employees-s.component';

describe('ListEmployeesSComponent', () => {
  let component: ListEmployeesSComponent;
  let fixture: ComponentFixture<ListEmployeesSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEmployeesSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmployeesSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
