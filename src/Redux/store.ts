import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productSlice';
import cartReducer from './cardSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
