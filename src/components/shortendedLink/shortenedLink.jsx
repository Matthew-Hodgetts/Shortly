import React from 'react';
import './shortenedLink.scss';
const ShortenedLink = ({ hashid, url }) => {
  return (
    <div className='shortenedLink'>
      <div className='row align-items-center'>
        <div className='col-lg-7'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='fullLink'>
            {url}
          </a>
        </div>
        <div className='col-lg-3'>
          <a
            href={`https://rel.ink/${hashid}`}
            target='_blank'
            rel='noopener noreferrer'
            className='shortLink'>
            {`https://rel.ink/${hashid}`}
          </a>
        </div>
        <div className='col-lg-2'>
          <button className='button button--small button--teal'>
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortenedLink;
