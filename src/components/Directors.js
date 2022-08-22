import React from "react";
import { directors } from "../data";

function Directors() {
  return ( 
    <div>
      <h1>Directors Page</h1>
      {directors.map(value => 
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

export default Directors;
