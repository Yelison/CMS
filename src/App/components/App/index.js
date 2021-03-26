import React from 'react';

const App =() => {
  const data = fetch('/holaMundo').then(console.log);
  console.log(data);
  return (
    <div>
    </div>
  );
}

export default App;
