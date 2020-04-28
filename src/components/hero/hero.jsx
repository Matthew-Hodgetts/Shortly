import React from 'react';
import './hero.scss';
import Illustration from '../../images/illustration-working.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <h1 className='hero__title'>More than just shorter links</h1>
            <p className='hero__lead'>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className='button button--teal'>Get Started</button>
          </div>
          <div className='col-md-6'>
            <img
              src={Illustration}
              alt='Working at desk'
              className='hero__img'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
