import { TestBed } from '@angular/core/testing';

import { FinalRegisterServiceService } from './final-register-service.service';

describe('FinalRegisterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinalRegisterServiceService = TestBed.get(FinalRegisterServiceService);
    expect(service).toBeTruthy();
  });
});
