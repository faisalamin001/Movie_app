import { useState, useEffect } from "react";
import "./detail.css";
import { useParams } from "react-router-dom";

function Detail() {
  const [movieDetail, setMovieDetail] = useState({});
  let { id } = useParams();
  const movieId = id;
  const API_KEY = "?api_key=fff0fdfb3465994f63109441fb500691";
  const BASE_URL = "https://api.themoviedb.org/3/movie/";
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  function showmovie() {
    fetch(BASE_URL + id + API_KEY)
      .then((result) => result.json())
      .then((data) => {
        setMovieDetail(data);
        console.log(data);
      });
  }
  useEffect(() => {
    showmovie();
  }, []);
  const mystyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
      IMG_URL + movieDetail.backdrop_path
    }) `,
    heigh: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "norepeat",
  };

  return (
    <div className='detail-box' style={mystyle}>
      <div className='img'>
        <img src={IMG_URL + movieDetail.poster_path} alt='' />
      </div>
      <div className='text'>
        <p className='name'>{movieDetail.title}</p>
        <br /> <br />
        <p className='rating'>Rating : 4.5</p>
        <br />
        <p className='desc'>{movieDetail.overview}</p>
        <br /> <br /> <br />
        <div className='movie-detail'>
          <div className='section1'>
            <p> Status : {movieDetail.status} </p>
            <p> Revenue : {movieDetail.revenue} </p>
          </div>
          <div className='section3'></div>
          <div className='section2'>
            <p> Duration : {movieDetail.runtime} minutes </p>
            <p> Language : {movieDetail.original_language} </p>
          </div>
        </div>
        <br /> <br />
        <button>
          {" "}
          <a href={movieDetail.homepage} target='blank'>
            Watch Trailer
          </a>{" "}
        </button>
      </div>
    </div>
  );
}

export default Detail;
