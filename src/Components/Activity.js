import React, { useEffect } from "react";
import {  getActivity } from "../actions";
import { connect } from 'react-redux';

const Activity = ({activity, isFetching, error, dispatch}) => {

  if (error) {
    return (
      <h2>We got an error: {error}</h2>
    )
  }
  if (isFetching) {
    return(
      <h2>...Finding an Activity</h2>
    )
  }


  const handleClick = () =>{
    dispatch(getActivity(activity))
  }

  return (
    <div>
      <h1>Activities to do when Bored</h1>
      <h2>{activity}</h2>
      <button onClick={handleClick}>Find Activities</button>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    activity: state.activity,
    error: state.error,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(Activity);