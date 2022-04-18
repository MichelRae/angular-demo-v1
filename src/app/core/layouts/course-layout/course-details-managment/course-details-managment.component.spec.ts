import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsManagmentComponent } from './course-details-managment.component';

describe('CourseDetailsManagmentComponent', () => {
  let component: CourseDetailsManagmentComponent;
  let fixture: ComponentFixture<CourseDetailsManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
