import "./App.css"
import Header from "./Components/Header";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TV from "./Pages/TV/TV";
import Celebrity from "./Pages/Celebirity/Celebirity";
import Movies from "./Pages/Movies/Movies";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header></Header>
        <Routes>
         <Route path="/" element=<HomePage></HomePage> />
          <Route path="/TV" element=<TV></TV> />
          <Route path="/Celebrity" element=<Celebrity></Celebrity> />
          <Route path="/Movies" element=<Movies></Movies> />
          <Route path="/MovieDetail/:movieId" element=<MovieDetail></MovieDetail> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
