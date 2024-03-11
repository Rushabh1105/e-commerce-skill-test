import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';

import { productReducer } from './ProductReducer';


export const store = configureStore({
    reducer: {
        productReducer,
    }
});
export const persistor = persistStore(store);