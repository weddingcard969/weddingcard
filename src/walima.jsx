import React from 'react';
import { useNavigate } from 'react-router-dom';
import img4 from './assets/4.jpg';

function Walima() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="main">
        <div className="inner">
          <img src={img4} alt="" />
          <div className="haldibtns">
            {/* <button className='haldi_rsvp'>RSVP</button> */}
            <button className='haldi_rsvp' onClick={() => navigate('/rsvp')}>RSVP</button>
            <button className='haldi_back' onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Walima;
