import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from "./slices/Nav";
import { productReducer } from "./slices/products";

export const store = configureStore({
    reducer:{
        products:productReducer,
        nav:navReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch