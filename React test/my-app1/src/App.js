import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
        
          <p>Loaded data</p>
        </div>
      )}
    </div>
  );
};

export default App;


