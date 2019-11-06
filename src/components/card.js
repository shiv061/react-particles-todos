import React from 'react';

export default function card({ todo, click, click2, click3 }) {
  return (
    <div style={{ margin: '20px' }} className='card-panel pur-b white-text'>
      <h6 className='pointer' onClick={click2}>
        {todo}
      </h6>
      <div>
        <button
          className='right btn-floating btn-medium waves-effect waves-light red'
          onClick={click}
        ></button>
        <button
          className='left btn-floating btn-medium waves-effect waves-light green'
          onClick={click3}
        ></button>
      </div>
    </div>
  );
}
