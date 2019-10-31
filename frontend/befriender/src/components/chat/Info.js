import React from 'react';
import Map from './Map'

function Info(props) {
    return (
      <div className="info">
         <h3> Info </h3>
         <Map  friend={props.friend} />
      </div>
     
    );
  }
  
  export default Info;