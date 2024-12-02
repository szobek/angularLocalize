import { TestBed } from '@angular/core/testing';

import { FormWrapperServiceService } from './form-wrapper-service.service';

describe('FormWrapperServiceService', () => {
  let service: FormWrapperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormWrapperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
