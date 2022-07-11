import React from 'react';
import { NavLink} from 'react-router-dom';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <NavLink to= {`movie/${imdbID}`} >More Details</NavLink>
      </div>
    </div>
  );
}

export default MovieCard;