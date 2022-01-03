var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
let FlightService = class FlightService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        console.log('flight service created');
    }
    search(from, to) {
        const url = 'http://www.angular.at/api/flight';
        const headers = new HttpHeaders().set('Accept', 'application/json');
        const params = new HttpParams().set('from', from).set('to', to);
        return this.httpClient.get(url, { headers, params });
    }
};
FlightService = __decorate([
    Injectable()
], FlightService);
export { FlightService };
//# sourceMappingURL=flight.service.js.map