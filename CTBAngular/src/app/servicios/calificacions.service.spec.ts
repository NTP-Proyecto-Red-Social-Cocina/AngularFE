import { TestBed } from '@angular/core/testing';

import { CalificacionsService } from './calificacions.service';

describe('CalificacionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalificacionsService = TestBed.get(CalificacionsService);
    expect(service).toBeTruthy();
  });
});
