import { TestBed } from '@angular/core/testing';

import { ObservableFactoryService } from './observable-factory.service';

describe('ObservableFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableFactoryService = TestBed.get(ObservableFactoryService);
    expect(service).toBeTruthy();
  });
});
