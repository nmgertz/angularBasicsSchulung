var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FlightService } from './flight.service';
import { Validators } from '@angular/forms';
let FlightSearchComponent = class FlightSearchComponent {
    constructor(flightService, fb) {
        this.flightService = flightService;
        this.fb = fb;
        this.flights = [];
        this.basket = {
            182: true,
        };
        this.formGroup = this.fb.group({
            from: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
            to: this.fb.control(null, [Validators.required]),
        });
    }
    ngOnInit() {
        console.log('flight search initialised');
    }
    onSelectedChange(selected, flightId) {
        console.log(selected, flightId);
        this.basket[flightId] = selected;
    }
    search() {
        const flights$ = this.flightService.search(this.from, this.to);
        flights$.subscribe((flights) => {
            this.flights = flights;
        }, (errResp) => {
            console.error('Error loading flights', errResp);
        });
    }
    onSubmit() {
        console.log('SUBMIT', this.formGroup.value);
        console.log(this.formGroup);
    }
    select(f) {
        this.selectedFlight = f;
    }
};
FlightSearchComponent = __decorate([
    Component({
        selector: 'app-flight-search',
        templateUrl: './flight-search.component.html',
        styleUrls: ['./flight-search.component.css'],
        providers: [FlightService],
    })
], FlightSearchComponent);
export { FlightSearchComponent };
//# sourceMappingURL=flight-search.component.js.map