import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getActivity = () => (dispatch) => {
  dispatch(fetchStart());
  axios.get('https://www.boredapi.com/api/activity')
  .then(resp => {
    console.log(resp)
    dispatch(fetchSuccess(resp.data.activity))
  })
  .catch(error => dispatch(fetchFail(error)))
}

export const fetchStart = () => {
  return({type:FETCH_START});
}

export const fetchSuccess = (activity) => {
  return({type:FETCH_SUCCESS, payload: activity});
}

export const fetchFail = (error) => {
  return({type:FETCH_FAILURE, payload: error});
}