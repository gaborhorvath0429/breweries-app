import { createReducer, on } from "@ngrx/store";
import { Brewery } from "src/app/models/brewery.model";
import { errorItem, loadItems, loadSelectedItem } from "./breweryActions";


export interface State {

    breweries: { items: Brewery[], selected?: null, error: string };
}

export const initialState: State = {
    breweries: { items: [], selected: null, error: '' }
}


export const BreweryReducer = createReducer(
    initialState,
    on(loadItems, (state, action) => ({
        ...state,
        items: action.items
    })),
    on(loadSelectedItem, (state, action) => ({
        ...state,
        selected: action.selected
    })),
    on(errorItem, (state, action) => ({
        ...state,
        error: action.message
    }))
);



export const selectItems = (state: State) => state.breweries.items;
export const selectOneItem = (state: State) => Object.assign({}, state.breweries.selected);            // lemásolja a selectedet és a másolát fogja vissza adni ?? kell ez?
export const selectError = (state: State) => state.breweries.error;