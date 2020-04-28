import React from 'react';
import './displayLinks.scss';
import ShortenedLink from '../shortendedLink/shortenedLink';
const DisplayLinks = ({ links }) => {
  return (
    <section className='displayLinks'>
      <div className='container'>
        {links.map((link) => {
          return (
            <ShortenedLink url={link.url} hashid={link.hashid} key={link.url} />
          );
        })}
      </div>
    </section>
  );
};

export default DisplayLinks;
