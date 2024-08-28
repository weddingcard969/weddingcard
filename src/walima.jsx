import React from 'react';
import { useNavigate } from 'react-router-dom';
import img4 from './assets/4.jpg';

function Walima() {
  const navigate = useNavigate();
  const handleMapClick = () => {
    // Replace with your desired map link (e.g., Google Maps URL)
    window.location.href = 'https://www.google.com/maps?rlz=1C1KNTJ_enPK1088PK1088&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDkyDQgBEC4YgwEYsQMYgAQyCAgCEEUYJxg7MgYIAxBFGDsyEwgEEC4YgwEYxwEYsQMY0QMYgAQyEwgFEC4YgwEYrwEYxwEYsQMYgAQyDQgGEC4YgwEYsQMYgAQyBggHEEUYPNIBCDIwODdqMGo3qAIIsAIB&um=1&ie=UTF-8&fb=1&gl=pk&sa=X&geocode=KSvqmkqNqxk5MZwsydjYn-w1&daddr=Lahore+Ring+Rd,+Chanar+Courts,+Lahore,+Punjab';
  };

  return (
    <div>
      <div className="main">
        <div className="inner">
          <img src={img4} alt="" />
          <div className="haldibtns">
            {/* <button className='haldi_rsvp'>RSVP</button> */}
            <button className='haldi_rsvp' onClick={() => navigate('/rsvp')}>RSVP</button>
            <button className='haldi_back' onClick={handleMapClick}>Location</button>          

            <button className='haldi_back' onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Walima;
