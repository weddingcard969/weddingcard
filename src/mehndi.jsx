import React from 'react'
import img3 from './assets/3.jpg';
import { useNavigate } from 'react-router-dom';


function Mehndi() {
  const navigate = useNavigate();
  const handleMapClick = () => {
    // Replace with your desired map link (e.g., Google Maps URL)
    window.location.href = '';
  };

  return (
    <div>
        <div className="main">
            <div className="inner">
                <img src={img3} alt="" />
                <div className="haldibtns">
            <button className='haldi_rsvp' onClick={() => navigate('/rsvp')}>RSVP</button>    
            <button className='haldi_back' onClick={handleMapClick}>Location</button>          
            <button className='haldi_back' onClick={() => navigate(-1)}>Back</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Mehndi