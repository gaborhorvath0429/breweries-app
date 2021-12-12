import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { Brewery } from "src/app/models/brewery.model";
import { errorItem, loadItems } from "./breweryActions";


export interface State {
    breweries: { items: Brewery[], error: string };
}

export const initialState: State = {
    breweries: { items: [], error: '' }
}


export const BreweryReducer = createReducer(
    initialState,
    on(loadItems, (state, action) => ({
        ...state,
        items: action.items
    })),
    on(errorItem, (state, action) => ({
        ...state,
        error: action.message
    }))
);



export const selectItems = (state: State) => state.breweries.items;
export const selectError = (state: State) => state.breweries.error;