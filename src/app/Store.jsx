import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/Counterslice';
import productsReducer from "../features/products/productslice";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
});

export default Store;