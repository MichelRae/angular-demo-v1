import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahsboardContainerComponent } from './dahsboard-container.component';

describe('DahsboardContainerComponent', () => {
  let component: DahsboardContainerComponent;
  let fixture: ComponentFixture<DahsboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DahsboardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DahsboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
