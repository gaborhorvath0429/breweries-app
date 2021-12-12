import { createAction, props } from "@ngrx/store";
import { Brewery } from "src/app/models/brewery.model";

// Actions.
export const getItems = createAction('[Brewery] get items');

export const loadItems = createAction(
    '[Brewery] load items',
    props<{ items: Brewery[] }>()
);

export const errorItem = createAction(
    '[Brewery] error item',
    props<{ message: string }>()
)
