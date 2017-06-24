import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeApplyListComponent } from './college-apply-list.component';

describe('CollegeApplyListComponent', () => {
  let component: CollegeApplyListComponent;
  let fixture: ComponentFixture<CollegeApplyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeApplyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeApplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
