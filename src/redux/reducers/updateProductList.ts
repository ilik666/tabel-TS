import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  TFetchTypes
} from "../actions/fetch-actions/fetch-action";

export type TProduct = {
  id: number
  product: string
  calories: number
  fat: number
  carbs: number
  protein: number
  iron: number
}
export type TProductState = {
  productParamsTitle: string[]
  products: TProduct[] | []
  isLoading: boolean
  isError: boolean
}
const initialState = {
  productParamsTitle: ['Sorting by','Product (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)', 'Iron (%)'],
  products: [],
  isLoading: true,
  isError: false
}

export const updateProductList = (state:any = initialState, action:TFetchTypes) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        products: [],
        isLoading: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        products: [],
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
}