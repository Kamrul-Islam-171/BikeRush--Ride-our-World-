import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import authReducer from './auth/AuthSlice';


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleWares => getDefaultMiddleWares({}).concat(baseApi.middleware)

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
