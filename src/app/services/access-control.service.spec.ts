import { TestBed, inject } from '@angular/core/testing';

import { AccessControlService } from './access-control.service';

describe('AccessControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessControlService]
    });
  });

  it('should ...', inject([AccessControlService], (service: AccessControlService) => {
    expect(service).toBeTruthy();
  }));
});
