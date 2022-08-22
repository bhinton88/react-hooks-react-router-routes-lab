import React from "react";
import { actors } from "../data";

function Actors() {
  return ( 
    <div>
      <h1>Actors Page</h1>
      {actors.map(value => 
        <div key={value.name}>
          <p>{value.name}</p>
          <ul>
          {value.movies.map(value => <li key={value}>{value}</li>)}
          </ul>
        </div>
        )}
    </div> 
  )
}

export default Actors;
