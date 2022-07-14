import React from 'react';
import ReactDOM from 'react-dom';
import Box1 from './Boxes';

const App=()=>{
  return(
    <div>
      <Box1 />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

