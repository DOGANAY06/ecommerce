import * as actionTypes from "../actionTypes";

const initialState = {
  products: [],
  productsDetails: null,
  loading: false,
  error: null,
  selectedCategory: "all",
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_CHARACTERS_FAILURE:
    case actionTypes.SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export default characterReducer;
