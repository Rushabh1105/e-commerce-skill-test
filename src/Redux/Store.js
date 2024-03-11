// import from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
// for persist soreage of data
import { persistStore } from 'redux-persist';
// product reducer
import { productReducer } from './ProductReducer';

// redux store
export const store = configureStore({
    reducer: {
        productReducer,
    }
});
// export persist store
export const persistor = persistStore(store);