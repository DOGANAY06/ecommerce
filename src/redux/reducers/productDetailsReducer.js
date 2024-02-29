// reducers/productReducer.js
import * as actionTypes from "../actionTypes";

const initialState = {
  productsDetail: [],
  loading: false,
  error: null,
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        productsDetail: action.payload,
      };
    case actionTypes.FETCH_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productDetailReducer;
