/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetVehicleListService } from './get-vehicle-list.service';

describe('GetVehicleListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetVehicleListService]
    });
  });

  it('should ...', inject([GetVehicleListService], (service: GetVehicleListService) => {
    expect(service).toBeTruthy();
  }));
});
