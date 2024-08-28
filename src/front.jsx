import { Link } from 'react-router-dom';
import img from './assets/1.jpg';
import './App.css';
import { useState } from 'react';

function Front() {
  let[event,setevent]=useState("");
  console.log(event);
  return (
    <div className="main">
      {/* <h3>Please </h3> */}
      <div className="inner">
        <img src={img} alt="" />
        <div className="fonts">
  
          <Link to="/haldi"><button className='m_btn' value="haldi" onClick={(e)=>setevent(e.target.value)}>Haldi</button></Link>
          <Link to="/mehndi"><button className='m_btn'value="mehndi" onClick={(e)=>setevent(e.target.value)}>Mehndi</button></Link>
          <Link to="/walima"><button className='m_btn' value="walima" onClick={(e)=>setevent(e.target.value)}>Shadi</button></Link>
        </div>
        
      </div>
    </div>
  );
}

export default Front;
