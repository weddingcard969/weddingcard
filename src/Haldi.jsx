import React from 'react';
import img2 from './assets/2.jpg';
import { useNavigate } from 'react-router-dom';

function Haldi() {
  const navigate = useNavigate();

  // Function to handle the click event for the map button
  const handleMapClick = () => {
    // Replace with your desired map link (e.g., Google Maps URL)
    window.location.href = 'https://www.google.com/maps/place/333-AA,+Marina+Event+Complex,+off+Raiwind+Rd,+near+BNU+university,+Chanar+Courts,+Lahore,+Punjab+54000/data=!4m2!3m1!1s0x3919ab0308c373f9:0xc87712e17ff8407e?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjE0Mi4xMDAYACDXggMqmQEsOTQyMzA1MTEsOTQyMDMzMjQsNDcwNzU0ODksOTQyMTY0MjYsOTQyMTY0MTMsOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksNDcwODcxMTgsNDcwODQzOTMsOTQyMTMyMDBCAlBL';
  };

  return (
    <div>
      <div className="main">
        <div className="inner">
          <img src={img2} alt="" />

          <div className="haldibtns">
            <button className='haldi_rsvp' onClick={() => navigate('/rsvp')}>RSVP</button>
            <button className='haldi_back' onClick={handleMapClick}>Location</button>
            <button className='haldi_back' onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Haldi;
