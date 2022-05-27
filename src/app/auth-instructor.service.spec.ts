import { TestBed } from '@angular/core/testing';

import { AuthInstructorService } from './auth-instructor.service';

describe('AuthInstructorService', () => {
  let service: AuthInstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
