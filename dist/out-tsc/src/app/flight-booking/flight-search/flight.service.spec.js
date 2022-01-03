import { TestBed } from '@angular/core/testing';
import { FlightService } from './flight.service';
describe('FlightService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FlightService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=flight.service.spec.js.map