import { useParams } from "react-router-dom";
import {movies} from "../../API"
import "./MovieDetail.css"
function MovieDetail() {
    const { movieId } = useParams();
    return (
    <div className = "moviedetail">
     <img className="poster" src = {"https://image.tmdb.org/t/p/original"+movies.results[movieId].poster_path}></img>
     <div className="title">{movies.results[movieId].title}</div>
     </div>
    );
  }
  
  export default MovieDetail;
  