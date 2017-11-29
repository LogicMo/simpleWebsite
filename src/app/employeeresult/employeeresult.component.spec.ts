import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeresultComponent } from './employeeresult.component';

describe('EmployeeresultComponent', () => {
  let component: EmployeeresultComponent;
  let fixture: ComponentFixture<EmployeeresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
