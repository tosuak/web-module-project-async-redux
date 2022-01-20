import React from "react";
import { connect } from 'react-redux';

import '../App.css';

const ActivityList = ({data}) => {
  return (
    <div className="ActivityList">
      <h3>{data.activity}</h3>
        <p>{data.type}</p>
        <p>{data.participant}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(ActivityList);
