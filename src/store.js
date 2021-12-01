import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productsSlice'
import flagsReducer from './features/flags/flagsSlice'
import upsertProductReducer from './features/upsertProduct/upsertProductSlice'
import accountReducer from './features/account/accountSlice'

export default configureStore({
    reducer: {
        products: productReducer,
        upsertProduct: upsertProductReducer,
        flags: flagsReducer,
        login: accountReducer,
    }
})