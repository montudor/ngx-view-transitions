import { TestBed } from '@angular/core/testing';

import { NgxViewTransitionsService } from './ngx-view-transitions.service';

describe('NgxViewTransitionsService', () => {
  let service: NgxViewTransitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxViewTransitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
