import { useState, useEffect } from "react";
import "./App2.css";
import Slider from "./Slider";

function Trending() {
  const [mydata, setmydata] = useState([]);
  const [nxtpage, setnxtpage] = useState(1);
  // const [prevpage, setprevpage] = useState(-1);
  const API_KEY = "api_key=fff0fdfb3465994f63109441fb500691";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const searchURL = BASE_URL + "/search/movie?" + API_KEY;
  function showmovie() {
    fetch(API_URL)
      .then((result) => result.json())
      .then((data) => {
        setmydata(data.results);
        console.log(data);
      });
  }
  useEffect(() => {
    showmovie();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 780);
  });

  const nexthandler = () => {
    setnxtpage(nxtpage + 1);
    fetch(`${API_URL}&page=${nxtpage + 1}`)
      .then((result) => result.json())
      .then((data) => {
        setmydata(data.results);
        //console.log(data);
      });
  };
  const prevhandler = () => {
    if (nxtpage === 1) {
      setnxtpage(1);
    } else {
      setnxtpage(nxtpage - 1);
    }
    fetch(`${API_URL}&page=${nxtpage}`)
      .then((result) => result.json())
      .then((data) => {
        setmydata(data.results);
        //console.log(data);
      });
  };
  return (
    <div>
      <Slider />
      <div className='title'>
        <h1>Trending</h1>
      </div>
      <div className='box'>
        {mydata.map((item) => {
          return (
            <div class='card'>
              <div class='image'>
                <img src={IMG_URL + item.poster_path} alt='img' />
              </div>
              <div className='card-title'>
                <h5>
                  {" "}
                  <a href={`detail/${item.id}`}>{item.title}</a>{" "}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className='btns'>
        <button onClick={prevhandler}>Prev page</button>
        <button onClick={nexthandler}>Next page</button>
      </div>
    </div>
  );
}

export default Trending;
