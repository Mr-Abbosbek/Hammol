import { combineReducers } from 'redux';
import { productReducer, selectProductReducer } from './reducer';

export const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectProductReducer
});