import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { catchError, of, switchMap } from "rxjs";
import { BreweryService } from "src/app/services/brewery.service";
import { getItems, loadItems } from "./breweryActions";


@Injectable()
export class BreweryEffect {
    loadItems$ = this.actions$.pipe(
        ofType(getItems),
        switchMap( () => this.breweryService.getBreweries() ),
        switchMap( breweries => of({ type: '[Brewery] load items', items: breweries }) ),
        catchError( error => of({ type: '[Brewery] error item', message: error }) )
    );


    constructor(
        private actions$: Actions,
        private breweryService: BreweryService,
    ) { }
}