import { createAction, props } from "@ngrx/store";
import { Brewery } from "src/app/models/brewery.model";


// Constant names for actions.
export const GET_ITEMS = '[Brewery] get items';
export const GET_ONE_ITEM = '[Brewery] get item';
export const LOAD_ITEMS = '[Brewery] load items';
export const LOAD_SELECTED_ITEM = '[Brewery] load selected'

export const ERROR_ITEM = '[Brewery] error item';



// Actions.
export const getItems = createAction(GET_ITEMS);
export const getOneItem = createAction(
    GET_ONE_ITEM,
    props<{id: string}>()
);


export const loadItems = createAction(
    LOAD_ITEMS,
    props<{ items: Brewery[] }>()
);


export const loadSelectedItem = createAction(
    LOAD_SELECTED_ITEM,
    props<{ selected: Brewery }>()
);


export const errorItem = createAction(
    ERROR_ITEM,
    props<{ message: string }>()
);
