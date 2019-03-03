/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToasterService } from './toaster-service.service';

describe('ToasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterService]
    });
  });

  it('should ...', inject([ToasterServiceService], (service: ToasterService) => {
    expect(service).toBeTruthy();
  }));
});
