// actions/productActions.js
import axios from "axios";
import * as actionTypes from "../actionTypes";

export const fetchProductDetails = (productId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PRODUCT_DETAILS_REQUEST });
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch({ type: actionTypes.FETCH_PRODUCT_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_PRODUCT_DETAILS_FAILURE, payload: error.message });
    }
  };
};
