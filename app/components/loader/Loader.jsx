import React from 'react';

import './loader.css';

const loading = () => (
  <div className="loader">
    <svg viewBox="0 0 32 32" width="32" height="32">
      <circle id="spinner" cx="16" cy="16" r="14" fill="none" />
    </svg>
  </div>
  );

export default loading;
