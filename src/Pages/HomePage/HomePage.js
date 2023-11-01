import React,{useState} from "react";

function HomePage() {
    
  const [isAdShown, setisAdShown] = useState(false)

  return (
    <>
     {isAdShown &&  <img src="./ad.svg"></img>}
      <button onClick={() =>setisAdShown(!isAdShown)}>{isAdShown ? "광고 안 보기" : "광고 보기"}</button>
    </>
  );
}

export default HomePage;
