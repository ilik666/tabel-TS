import { combineReducers } from 'redux'
import { updateProductList } from './updateProductList'

export const rootReducers = combineReducers({
  products: updateProductList
})