import React from 'react';
import img2 from './assets/2.jpg';
import { useNavigate } from 'react-router-dom';

function Haldi() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="main">
        <div className="inner">
          <img src={img2} alt="" />
          <div className="haldibtns">
            <button className='haldi_rsvp' onClick={() => navigate('/rsvp')}>RSVP</button>
            <button className='haldi_back' onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Haldi;
