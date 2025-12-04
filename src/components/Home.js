import Card from './Card';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {
  const [searchMovie, setSearchMovie] = useState('');
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=740b12cd&s=${searchMovie || "batman"}`
        );
        setListMovies(res.data.Search || []);
        console.log(res.data.Search);
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
          listMovies.map((movie , index) => (<Card key={index} movie={movie} />))
        ) 
        : (<p>No movies found</p>)}

      </main>
    </div>
  );
}

export default Home;
