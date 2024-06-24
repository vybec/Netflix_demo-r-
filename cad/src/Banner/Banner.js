import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../Constants/constants';
import axios from '../axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data && response.data.results) {
          const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
          setMovie(randomMovie);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
      className='banner'
    >
      <div className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" className="logo" />
        <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Right Logo" className="right-logo" />
      </div>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title || movie.name : ''}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>
          {movie ? movie.overview : ''}
        </h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;
