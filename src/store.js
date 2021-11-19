import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productsSlice'
import flagsReducer from './features/flags/flagsSlice'

export default configureStore({
    reducer: {
        products: productReducer,
        flags: flagsReducer,
    }
})