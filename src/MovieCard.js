import "./MovieCard.css";
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
const MovieCard = ({ title, score, description,src,index }) => {
    
    const [mouseOver, setmouseOver] = useState(false)
    const navigate = useNavigate();

    const handleMouseOver = () =>{
         setmouseOver(true)
    }

    const handleMouseLeave = () =>{
        setmouseOver(false)
    }

    const handleClick = () =>{
    navigate("/MovieDetail/"+index);
  }
    
  return (
    <div className="moviecard_frame"
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
    >
      <img className="moviecard_image"
      src = {"https://image.tmdb.org/t/p/original"+src} />
      <div className="moviecard_infoframe">
      <div className="moviecard_title">{title}</div>
      <div className="moviecard_discription">{score}</div>
      </div>
      {mouseOver ?
      <div className="moviecard_foreground">
      <div className="moviecard_overviewframe">
        <b className="moviecard_overviewtitle">{title}</b>
        <div className="moviecard_overviewdiscription">{description}</div>
      </div>
      </div>
       : 
       null}
    </div>
  );
};

export default MovieCard;
