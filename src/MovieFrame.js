import "./MovieFrame.css";
import MovieCard from "./MovieCard";
import { movies } from "./API";

function MovieFrame() {
  return (
    <div className="grid-container">
      {movies.results.map((movieInfo, index) => (
        <MovieCard
          key={index} // 각 요소에 고유한 키를 제공해야 합니다.
          title={movieInfo.title}
          score={movieInfo.vote_average}
          description={movieInfo.overview}
          movieInfo = {movieInfo}
          src = {movieInfo.poster_path}
          index = {index}
        />
      ))}
    </div>
  );
}

export default MovieFrame;
