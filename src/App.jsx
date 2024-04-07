import React from 'react';

import HomePage from './assets/Homepages';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default App;
