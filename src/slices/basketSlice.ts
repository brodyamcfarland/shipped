import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Items } from "../../types";
import type { RootState } from "../app/store";
interface CounterState {
    items: Items[];
}

const initialState: CounterState = {
    items: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<Items>) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action: PayloadAction<any>) => {
            const index = state.items.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            );

            let newBasket = [...state.items];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cannot Remove Product (id: ${action.payload.id}) as its not in the cart`
                );
            }

            state.items = newBasket;
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: RootState) => state.basket.items;

//Reduce - (params) => param + var, (Where reducer starts)
export const selectTotal = (state: RootState) =>
    state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
