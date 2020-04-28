import React from 'react';
import './cta.scss';
const Cta = () => {
  return (
    <section className='cta'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <h2 className='cta__title'>Boost your links today</h2>
            <button className='button button--teal'>Get started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
