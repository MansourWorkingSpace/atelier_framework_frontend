import { TestBed } from '@angular/core/testing';

import { EtudiantSService } from './etudiant-s.service';

describe('EtudiantSService', () => {
  let service: EtudiantSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
