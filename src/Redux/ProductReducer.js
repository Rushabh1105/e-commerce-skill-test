import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const baseURL = 'https://my-json-server.typicode.com/Rushabh1105/product-data'
const initialState = {
    products: [],
    cart: [],
    loading: false,
    error: null,
    product: null,
};

export const getProductsThunk = createAsyncThunk('products/getProducts', async(args, thunkAPI) => {
    try {
        const response = await fetch(`${baseURL}/products`);
        const data = await response.json();
        if(data.status === 404){
            return thunkAPI.rejectWithValue('Something went wrong')
        }
        return data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue('Unable to fetch the data')
    }
});

export const getProductByIdThunk = createAsyncThunk('products/getProductById', async(args, thunkAPI) => {
    try {
        const response = await fetch(`${baseURL}/products/${args}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Unable to fetch the product')
    }
});

export const addNewProductThunk = createAsyncThunk('product/addnew', async(args, thunkAPI) => {
    try {
        const response = await fetch(`${baseURL}/products`, {
            method: 'POST',
            body: JSON.stringify(args),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue('Something went wrong')
    }
});

export const deleteProductThunk = createAsyncThunk('product/delete', async(args, thunkAPI) => {
    try {
        const response = await fetch(`${baseURL}/products`, {
            method: 'DELETE',
            body: JSON.stringify(args),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        });
        await response.json();
        return args;
    } catch (error) {
        return args;
    }
})

export const getCartThunk = createAsyncThunk('cart/getProducts', async(args, thunkAPI) => {
    try {
        const response = await fetch(`${baseURL}/cart`);
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Something went wrong')
    }
})

export const addToCartThunk = createAsyncThunk('cart/addProduct', async(args, thunkAPI) => {
    try {
        const response = await fetch(`${baseURL}/cart`, {
            method: 'POST',
            body: JSON.stringify(args),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(args);
    }
})

export const removeFromCartThunk = createAsyncThunk('cart/removeProduct', async(args, thunkAPI) => {
    try {
        const response = await fetch(`${baseURL}/cart/${args.id}`, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        await response.json();
        return args
    } catch (error) {
        return thunkAPI.rejectWithValue(args);
    }
})

export const updateProductThunk = createAsyncThunk('/product/updateProduct', async(args, thunkAPI) => {
    try {
        const response = await fetch(`${baseURL}/cart/${args.id}`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        await response.json();
        return args
    } catch (error) {
        return thunkAPI.rejectWithValue(args)
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
            toast.loading('Fetching data...')
        })
        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.products = [...action.payload];
            toast.dismiss();
            toast.success('Fetched the data...')
        })
        .addCase(getProductsThunk.rejected, (state, action) => {
            state.error = 'unable to fetch data';
            state.products = [];
            state.loading = false;
            toast.error(state.error);
        })
        .addCase(getProductByIdThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
            toast.loading('Fetching Products');
        })
        .addCase(getProductByIdThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.product = action.payload;
            toast.dismiss();
            toast.success('Fetched data')
        })
        .addCase(getProductByIdThunk.rejected, (state, action) => {
            state.loading = false;
            state.product = null;
            toast.error('Something went wrong')
        })
        .addCase(addNewProductThunk.fulfilled, (state, action) => {
            state.products = [...state.products, action.payload];
            state.error = null;
            state.loading = false;
        })
        .addCase(addNewProductThunk.rejected, (state) => {
            state.error = 'Something went wrong';
            state.loading = false;
        })
        .addCase(getCartThunk.pending, (state, action) => {
            state.error = null;
            state.loading = true;
        })
        .addCase(getCartThunk.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.cart = [...action.payload];
        })
        .addCase(getCartThunk.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(addToCartThunk.pending, (state, action) => {
            toast.loading('Adding to the cart')
        })
        .addCase(addToCartThunk.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            const cartItem = state.cart.findIndex((p) => p.id === action.payload.id);
            toast.dismiss();
            if(cartItem === -1){
                state.cart = [...state.cart, action.payload];   
                toast.success('Product added to cart')  
            }else{
                toast.error('Product already in cart')
            }
            state.loading = false;
        })
        .addCase(addToCartThunk.rejected, (state, action) => {
            const prod = {...action.payload};
            const crt = [...state.cart];
            const cartItem = crt.findIndex((p) => p.id === prod.id);
            toast.dismiss()
            if(cartItem !== -1){
                toast.error('Product already in cart')
            }else if(cartItem === -1){
                state.cart = [...state.cart, action.payload]
                toast.success('Product added to cart')
            }else{
                toast.error('Something went wrong');
            }
            
            state.loading = false;
        })
        .addCase(deleteProductThunk.fulfilled, (state, action) => {
            const productIndex = state.products.findIndex((p) => p.id === action.payload.id)
            if(productIndex !== -1){
                state.products.splice(productIndex, 1);
            }
            toast.warn('Product removed')
        })
        .addCase(deleteProductThunk.rejected, (state, action) => {
            const productIndex = state.products.findIndex((p) => p.id === action.payload.id)
            if(productIndex !== -1){
                state.products.splice(productIndex, 1);
                toast.warn('Product removed')
            }else{
                toast.error('Something went wrong')
            }
        })
        .addCase(removeFromCartThunk.fulfilled, (state, action) => {
            const cartIndex = state.cart.findIndex((p) => p.id === action.payload.id);
            if(cartIndex !== -1){
                state.cart.splice(cartIndex, 1);
                toast.success('Product removed from cart')
            }else{
                toast.warn('Something went wrong')
            }
        })
        .addCase(removeFromCartThunk.rejected, (state, action) => {
            const cartIndex = state.cart.findIndex((p) => p.id === action.payload.id);
            if(cartIndex !== -1){
                state.cart.splice(cartIndex, 1);
                toast.success('Product removed from cart')
            }else{
                toast.warn('Something went wrong')
            }
        })
        .addCase(updateProductThunk.fulfilled, (state, action) => {
            const productIndex = state.products.findIndex((p) => p.id === action.payload.id);
            if(productIndex === -1){
                toast.error('Something went wrong')
            }else{
                state.products[productIndex] = action.payload;
                toast.success('Product Updated...')
            }
        })
        .addCase(updateProductThunk.rejected, (state, action) => {
            const productIndex = state.products.findIndex((p) => p.id === action.payload.id);
            if(productIndex === -1){
                toast.error('Something went wrong')
            }else{
                state.products[productIndex] = action.payload;
                toast.success('Product Updated...')
            }
        })
    }
});

const persistConfig = {
    key: 'product',
    storage,
};


export const productReducer = persistReducer(persistConfig, productSlice.reducer);

export const productActions = productSlice.actions;

export const productSelector = (state) => state.productReducer;
