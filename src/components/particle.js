import React from 'react';
import '../App.css';
import Particles from 'react-particles-js';

export default function particle() {
  return (
    <div className='App'>
      <Particles
        className='particles'
        params={{
          particles: {
            number: {
              value: 190,
              density: {
                enable: true,
                value_area: 1000
              }
            }
          }
        }}
      />
    </div>
  );
}
