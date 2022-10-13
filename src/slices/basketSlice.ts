import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../types";
import type { RootState } from "../app/store";
interface CounterState {
    items: Products[];
}

const initialState: CounterState = {
    items: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<Products>) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {},
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: RootState) => state.basket.items;

export default basketSlice.reducer;
