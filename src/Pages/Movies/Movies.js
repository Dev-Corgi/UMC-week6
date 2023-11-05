import React from "react";
import styled from "styled-components";
import MovieCard from "../../Components/MovieCard";
import { movies } from "../../API";

const MoviesWrapper = styled.div`
  position: relative;
  background-color: #24234B;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  position: relative;
  width: 93.25vw;
  top: 23px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(38.2vw, auto);
  grid-gap: 20px;
`;

function Movies() {
  return (
    <MoviesWrapper>
      <GridContainer className="grid-container">
        {movies.results.map((movieInfo, index) => (
          <MovieCard
            key={index}
            title={movieInfo.title}
            score={movieInfo.vote_average}
            description={movieInfo.overview}
            src={movieInfo.poster_path}
            index={index}
          />
        ))}
      </GridContainer>
    </MoviesWrapper>
  );
}

export default Movies;
