import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';

const base_url = 'https://image.tmdb.org/t/p/original/';

function VideoCard({ movie }) {
  return (
    <div className='videoCard'>
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt='Movie Cover'
      />
      <TextTruncate
        line={2}
        element='p'
        truncateText=' (learn more)'
        // textTruncateChild={<a href='#'>Read On</a>}
        text={movie.overview}
      />
      {/* <p>{movie.release_date || movie.air_date}</p> */}
      <h2>{movie.title}</h2>
      <p>{movie.vote_count}</p>
    </div>
  );
}

export default VideoCard;
