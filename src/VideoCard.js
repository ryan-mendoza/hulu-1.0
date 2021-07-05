import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

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
        text={movie.overview}
        // textTruncateChild={<a href='#'>Read On</a>}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className='videoCard__stats'>
        {movie.media_type && `${movie.media_type} ∙`}
        {movie.release_date || movie.air_date} ∙ <ThumbUpIcon />{' '}
        {movie.vote_count}
      </p>
    </div>
  );
}

export default VideoCard;
