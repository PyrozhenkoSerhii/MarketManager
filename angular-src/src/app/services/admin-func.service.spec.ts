import { TestBed, inject } from '@angular/core/testing';

import { AdminFuncService } from './admin-func.service';

describe('AdminFuncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminFuncService]
    });
  });

  it('should be created', inject([AdminFuncService], (service: AdminFuncService) => {
    expect(service).toBeTruthy();
  }));
});
