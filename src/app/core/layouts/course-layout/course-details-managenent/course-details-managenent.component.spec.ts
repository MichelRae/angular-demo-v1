import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsManagenentComponent } from './course-details-managenent.component';

describe('CourseDetailsManagenentComponent', () => {
  let component: CourseDetailsManagenentComponent;
  let fixture: ComponentFixture<CourseDetailsManagenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailsManagenentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsManagenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
