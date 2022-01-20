import { FETCH_START, FETCH_FAILURE, FETCH_SUCCESS } from "../actions";

const initialState = {
  data: {
    activity: '',
    participant: '',
    type: ''
  },
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_START: 
      return {
        ...state,
        data: {},
        isFetching: true,
        error: ''
      };
    case FETCH_FAILURE:
      return {
        ...state,
        data: {},
        isFetching: false,
        error: action.payload
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: {
          activity: `Activity: ${action.payload.activity}`,
          participant: `Participants: ${action.payload.participants}`,
          type: `Type of Activity: ${action.payload.type}`
        },
        isFetching: false,
        error: ''
      };
    default:
      return state;
  }
}