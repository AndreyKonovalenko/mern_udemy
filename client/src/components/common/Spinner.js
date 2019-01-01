import React from 'react';
import gif from './spinner.gif';

const Spinner = () => (
  <div>
    <img
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      src={gif}
      alt='Loading...'
    />
  </div>
);

export default Spinner;
