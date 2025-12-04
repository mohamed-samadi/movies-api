import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import axios from "axios";
function MovieDetails() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    useEffect(() => {
        // Fetch movie details using the id
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `https://www.omdbapi.com/?apikey=740b12cd&i=${id}`
                );
                setMovieDetails(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            } };
        fetchMovieDetails();
    }, [id]);

  return (
    <div className="movie-details">
        {movieDetails ? (   <div >
        <h2>{movieDetails.Title}</h2>
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <p><strong>Year:</strong> {movieDetails.Year}</p>
        <p><strong>Genre:</strong> {movieDetails.Genre}</p>
        <p><strong>Director:</strong> {movieDetails.Director}</p>
        <p><strong>Plot:</strong> {movieDetails.Plot}</p>
    </div>) 
      : (<p>Loading...</p>)}
    </div>
  )
}

export default MovieDetails
