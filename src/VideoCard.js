import React from 'react';
import './VideoCard.css';

function VideoCard({ movie }) {
  return (
    <div className='videoCard'>
      <img
        src='https://media.gq.com/photos/5bf59cf497268507efb76609/16:9/w_2560%2Cc_limit/sorry-to-bother-you-hulu-gq.jpg'
        alt=''
      />
      <p>This is a film about stuff</p>
      <h2>Movie Title</h2>
      <p>Number of Likes</p>
    </div>
  );
}

export default VideoCard;
