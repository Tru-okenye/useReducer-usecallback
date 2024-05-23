import { useState } from 'react';
import './App.css';
import Props from './Rendering';
import My_name from './States'
import students from './States';
import Ref from './Ref';
import Reducer from './Reducer';
import ParentComponent from './Callback';

function App() {

  return (
    <>
    <div>
      {/* <My_name/>
      <students/>
      <Ref/> */}
  {/* <Reducer/> */}
  <ParentComponent/>
 
    </div>
    </>
  )
}

export default App
