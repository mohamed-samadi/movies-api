import { Link } from "react-router-dom";

function Card({movie}){
  return(
    <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' , color : 'black' }}>
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
    </Link>

  )
}
export default Card;