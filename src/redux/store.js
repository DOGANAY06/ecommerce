import { applyMiddleware, combineReducers,createStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import characterReducer from './reducers/productReducer';
import productDetailReducer from './reducers/productDetailsReducer';

// Reducer'ları bir araya getirerek root reducer'ı oluşturuyoruz.
const rootReducer = combineReducers({
    products: characterReducer,
    productsDetail:productDetailReducer
});

// Redux store'unu oluşturuyoruz.
// applyMiddleware ile redux-thunk middleware'ini uyguluyoruz.
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;