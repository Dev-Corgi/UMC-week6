import { useParams } from "react-router-dom";
import { movies } from "../../API";
import styled from "styled-components";

const MovieDetailWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const PosterImage = styled.img`
  width: 450px;
  height: 600px;
`;

const Title = styled.div`
  font-size: 40px;
`;

function MovieDetail() {
  const { movieId } = useParams();

  return (
    <MovieDetailWrapper className="moviedetail">
      <PosterImage src={"https://image.tmdb.org/t/p/original" + movies.results[movieId].poster_path} />
      <Title>{movies.results[movieId].title}</Title>
    </MovieDetailWrapper>
  );
}

export default MovieDetail;
