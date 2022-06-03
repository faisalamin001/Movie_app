import { useState } from "react";
import "./browse.css";

function Browse() {
  const [mydata, setmydata] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const API_KEY = "api_key=fff0fdfb3465994f63109441fb500691";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const searchURL =
    BASE_URL + "/search/movie?" + API_KEY + "&query=" + searchTerm;
  const Genres =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=fff0fdfb3465994f63109441fb500691";
  const Genre_Url =
    "https://api.themoviedb.org/3/discover/movie?api_key=fff0fdfb3465994f63109441fb500691&sort_by=popularity.desc&with_genres=";

  function Searchmovie() {
    fetch(searchURL)
      .then((result) => result.json())
      .then(
        (data) => setmydata(data.results)
        //console.log(data)
      );
  }

  function Genre(index) {
    fetch(Genre_Url + index)
      .then((result) => result.json())
      .then(
        (data) => setmydata(data.results)
        //console.log(data)
      );
  }

  return (
    <div className='main'>
      <div className='head'>
        <h1>Search Movie</h1>
        <br />
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          placeholder='Search...'
        />
        <br /> <br />
        <button onClick={Searchmovie}>Search</button>
        <br />
        <div className='genrebox'>
          <h3 className='genretitle'>Search by Genre</h3>
          <div className='genre'>
            <button onClick={() => Genre(28)}>Action</button>
            <button onClick={() => Genre(35)}>Comedy</button>
            <button onClick={() => Genre(27)}>Horror</button>
            <button onClick={() => Genre(10770)}>Romance</button>
          </div>
        </div>
      </div>
      <div className='box'>
        {mydata.map((item) => {
          return (
            <div class='card'>
              <div class='image'>
                <img src={IMG_URL + item.poster_path} alt='img' />
              </div>
              <div className='card-title'>
                <h5>{item.title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Browse;
