import { TestBed, inject } from '@angular/core/testing';

import { CollegeTrackerService } from './college-tracker.service';

describe('CollegeTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollegeTrackerService]
    });
  });

  it('should ...', inject([CollegeTrackerService], (service: CollegeTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
