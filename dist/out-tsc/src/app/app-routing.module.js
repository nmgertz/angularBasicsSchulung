var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'flight-search',
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent,
        loadChildren: () => import('./flight-booking/flight-booking.module').then((m) => m.FlightBookingModule),
    },
    {
        path: 'home',
        component: HomeComponent,
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
export const AppRoutingModuleTest = RouterModule.forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map