import React from "react";
import { movies } from "../data";

function Movies() {
  return ( 
    <div>
      <h1>Movies Page</h1>
      {movies.map(value => 
        <div key={value.title}>
          <p>Title: {value.title}</p>
          <p>Time: {value.time}</p>
          <p>Genres:</p>
          <ul>
            {value.genres.map(value => <li key={value}>{value}</li>)}
          </ul>
        </div>)}
    </div> 
  )
}

export default Movies;
