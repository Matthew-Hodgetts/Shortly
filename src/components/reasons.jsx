import React from 'react';
import './reasons.scss';

import Reason1 from '../images/icon-brand-recognition.svg';
import Reason2 from '../images/icon-detailed-records.svg';
import Reason3 from '../images/icon-fully-customizable.svg';

const Reasons = () => {
  return (
    <section className='reasons'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 text-center'>
            <h2 className='reasons__title'>Advanced statistics</h2>
            <p className='reasons__subtitle'>
              Track how links are performing across the web with our advanced
              statistics dashboard.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='reasons__card reasons__card--one'>
              <img src={Reason1} alt='Icon' />
              <h4 className='reasons__card-title'>Brand Recognition</h4>
              <p className='reasons__card-text'>
                Boost your brand recognition with each click. Generic Links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='reasons__card reasons__card--two'>
              <img src={Reason2} alt='Icon' />
              <h4 className='reasons__card-title'>Detailed Records</h4>
              <p className='reasons__card-text'>
                Boost your brand recognition with each click. Generic Links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='reasons__card reasons__card--three'>
              <img src={Reason3} alt='Icon' />
              <h4 className='reasons__card-title'>Fully Customizable</h4>
              <p className='reasons__card-text'>
                Boost your brand recognition with each click. Generic Links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
