import React from 'react'
import { useParams ,NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';

import './single.css';
const apiforid = 'https://www.omdbapi.com/?&apikey=303df271';

const SingleMovie = () => {
  const [movies, setMovies] = useState({});
  const { id } = useParams();

  useEffect(() => {
    searchid(id);
  }, []);

  const searchid = async (id) => {
    const response = await fetch(`${apiforid}&i=${id}`);
    const data = await response.json();
    setMovies(data);
    // console.log(movies);
  };

  return (
    <>
      <div className='outer'>
        <div className='main'>
          <div className='movieposter' >
            <div>
              <img className='poster' src={movies.Poster !== "N/A" ? movies.Poster : "https://via.placeholder.com/400"} alt={movies.Title} />
            </div>
          </div>

          <div className='contain' >
            <div><pre>Released   : </pre>{movies.Released}</div>
            <div>

              <h3 ><pre>Title      : </pre> {movies.Title} </h3>
            </div>
            <div className='rating'>
              <span><pre>imDB       : </pre> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--star sc-7ab21ed2-4 hLFdut" id="iconContext-star" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
                {movies.imdbRating}/10 </span>
            </div>
            <div className='plotdesc'><pre>Plot       : </pre>{movies.Plot}</div>
            <div><pre>Runtime    : </pre>{movies.Runtime}</div>
            <div><pre>Genre      : </pre>{movies.Genre}</div>
            <div><pre>Actors     : </pre>{movies.Actors}</div>
            <div><pre>Language   : </pre>{movies.Language}</div>
            <div><pre>Awards     : </pre>{movies.Awards}</div>
            <div><pre>Metascore  : </pre>{movies.Metascore}</div>
            <div><pre>Collection : </pre>{movies.BoxOffice}</div>
            <div></div>

            <NavLink to= {`/`} >Back</NavLink>
          </div>
        </div>
      </div>
    </>

  )
}

export default SingleMovie