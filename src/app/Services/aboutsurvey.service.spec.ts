import { TestBed } from '@angular/core/testing';

import { AboutsurveyService } from './aboutsurvey.service';

describe('AboutsurveyService', () => {
  let service: AboutsurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutsurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
