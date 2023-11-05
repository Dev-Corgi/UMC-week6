import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieCardFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  flex-shrink: 0;
  background-color: #393a6a;
  color: white;
  overflow: hidden;
`;

const MovieCardImage = styled.img`
  position: relative;
  height: 75%;
  width: 100%;
  object-fit: cover;
`;

const MovieCardInfoFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
  height: 20%;
  width: 83.91%;
  font-size: 1.25vw;
`;

const MovieCardTitle = styled.div`
  width: 74%;
`;

const MovieCardScore = styled.div`
  width: 9%;
`;

const MovieCardForeground = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const MovieCardOverviewFrame = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 85%;
  top: 7.74vw;
  text-align: left;
  gap: 4.68vw;
`;

const MovieCardOverviewTitle = styled.b`
  font-size: 1.25vw;
`;

const MovieCardOverviewDescription = styled.div`
  font-size: 0.958vw;
`;

const MovieCard = ({ title, score, description, src, index }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const handleClick = () => {
    navigate("/MovieDetail/" + index);
  };

  return (
    <MovieCardFrame
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <MovieCardImage src={"https://image.tmdb.org/t/p/original" + src} />
      <MovieCardInfoFrame>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieCardScore>{score}</MovieCardScore>
      </MovieCardInfoFrame>
      {mouseOver ? (
        <MovieCardForeground>
          <MovieCardOverviewFrame>
            <MovieCardOverviewTitle>{title}</MovieCardOverviewTitle>
            <MovieCardOverviewDescription>{description}</MovieCardOverviewDescription>
          </MovieCardOverviewFrame>
        </MovieCardForeground>
      ) : null}
    </MovieCardFrame>
  );
};

export default MovieCard;
