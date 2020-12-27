import { TProduct } from "../../reducers/updateProductList";

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

type TFetchRequest = {
  type: typeof FETCH_PRODUCTS_REQUEST
}

type TFetchSuccessT =  {
    type: typeof FETCH_PRODUCTS_SUCCESS,
    payload: TProduct[]
}

type TFetchFailure = {
  type: typeof FETCH_PRODUCTS_FAILURE
  payload: boolean
}

export const fetchRequest = ():TFetchTypes => ({ type: FETCH_PRODUCTS_REQUEST })

export const fetchSuccess = (payload:TProduct[]):TFetchTypes => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload
  }
}
export const fetchFailure = ():TFetchTypes => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: true
  }
}
export type TFetchTypes = TFetchFailure | TFetchSuccessT | TFetchRequest