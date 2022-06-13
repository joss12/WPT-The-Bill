import React, {useContext} from 'react';
import Stage from './Components/stage1';
import Stage2 from './Components/stage2';

// import Button from 'react-bootstrap/Button';
import './style/app.css'

import {EddyContext} from './Context/'
const App = () =>{

  const context = useContext(EddyContext)
  // console.log(context);


  return(
    <div className="wrapper">
    <div className="center-wrapper">
      <h1>Who pays the bill ?</h1>
      {
        context.state.stage === 1 ? 
        <Stage /> : <Stage2 />
      }
    </div>
    </div>
  )
}

export default App