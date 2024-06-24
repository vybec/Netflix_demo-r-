import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import './Rowpost.css';
import { imageUrl, API_KEY } from '../../Constants/constants';
import axios from '../../axios';

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch(err => {
        setError('Network error');
        setLoading(false);
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log('Array is empty');
        }
      })
      .catch(err => {
        console.log('Error fetching movie trailer:', err);
      });
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='posters'>
          {movies.map((obj) => (
            <img
              key={obj.id}
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageUrl + obj.backdrop_path}`}
              alt='poster'
            />
          ))}
        </div>
      )}
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default Rowpost;
