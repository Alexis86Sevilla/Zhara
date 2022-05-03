/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarruselService } from './carrusel.service';

describe('Service: Carrusel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarruselService]
    });
  });

  it('should ...', inject([CarruselService], (service: CarruselService) => {
    expect(service).toBeTruthy();
  }));
});
