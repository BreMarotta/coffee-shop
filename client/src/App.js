import React, { useState, useEffect }from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
    .then(res => res.json())
    .then(data => setCount(data.count));
  }, [])

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App