import { FETCH_START, FETCH_FAILURE, FETCH_SUCCESS } from "../actions";

const initialState = {
  activity: {},
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_START: 
      return {
        ...state,
        activity: {},
        isFetching: true,
        error: ''
      };
    case FETCH_FAILURE:
      return {
        ...state,
        activity: {},
        isFetching: false,
        error: action.payload
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        activity: action.payload,
        isFetching: false,
        error: ''
      };
    default:
      return state;
  }
}