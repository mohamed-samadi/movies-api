import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css' ;


function Card({movie}){
  return(
    <div className='Card'>
         <h3 className='card-header'>{movie.Title}</h3>
         <div className="card-body">
          <img src={movie.Poster} alt={movie.Title}  />
         </div>
        <div className="card-footer">
           <div>Year : {movie.Year}</div>
            <div>Type : {movie.Type}</div>
        </div>
    </div>
  )
}


function App() {
  const [searchMovie, setSearchMovie] = useState('');
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=740b12cd&s=${searchMovie || "batman"}`
        );
        setListMovies(res.data.Search || []);
      } catch (err) {
        console.log(`Error happens: ${err}`);
      }
    };

    getData();
  }, [searchMovie]);

  return (
    <div>
      <header>
        <h1>OMdb Movies</h1>

        <input
          type="search"
          placeholder="Enter name of movie"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
      </header>

      <main>

        {listMovies?.length > 0 ? (
          listMovies.map((movie) => (<Card movie={movie} />))
        ) 
        : (<p>No movies found</p>)}

      </main>
    </div>
  );
}

export default App;
