import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productsSlice'
import flagsReducer from './features/flags/flagsSlice'
import upsertProductReducer from './features/upsertProduct/upsertProductSlice'
import accountReducer from './features/account/accountSlice'
import upsertFlagReducer from './features/upsertFlag/upsertFlagSlice'
import upsertUserReducer from './features/upsertUser/UpsertUserSlice'

export default configureStore({
    reducer: {
        products: productReducer,
        upsertProduct: upsertProductReducer,
        upsertFlag: upsertFlagReducer,
        upsertUser: upsertUserReducer,
        flags: flagsReducer,
        login: accountReducer,
    }
})
