import React from "react";
import {  getActivity } from "../actions";
import { connect } from 'react-redux';
import ActivityList from "./ActivityList";

import '../App.css';

const Activity = ({ isFetching, error, dispatch}) => {

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
    dispatch(getActivity())
  }

  return (
    <div className="Activity">
      <h1>Activities to do when Bored</h1>
      <ActivityList />
      <button onClick={handleClick}>Find Activities</button>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(Activity);