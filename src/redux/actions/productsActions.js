import axios from "axios";
import * as actionTypes from "../actionTypes";

export const fetchCharacters = (category) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_CHARACTERS_REQUEST });
    try {
      let url = "https://fakestoreapi.com/products";
      const params = {
        limit: 30 // Burada max 30 limiti
      };
      if (category !== "all") {
        url += `/category/${category}`;
      }
      const response = await axios.get(url, { params });
      dispatch({ type: actionTypes.FETCH_CHARACTERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_CHARACTERS_FAILURE, payload: error.message });
    }
  };
};