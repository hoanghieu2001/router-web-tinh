import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shoppingCart.slide";

export const store = configureStore({
    reducer: {
        [cartSlice.name]: cartSlice.reducer,
    }
});
export type RootState = ReturnType<typeof store.getState>