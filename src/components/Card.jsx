import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, value,unit }) => {
  return (
    <div className='col-5'>
      <div className='card-container bg-white border w-50 rounded p-2'>
        <p className='fs-6 fw-light'>{title}</p>
        <p className='fs-2 fw-bold mt-5'>{value}<span className='fs-5 fw-normal'>{unit}</span></p>
      </div>
    </div>
  );
};

export default Card;
