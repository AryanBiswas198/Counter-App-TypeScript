import React, { useState } from 'react';
import './App.css';
import CounterPage from './components/CounterPage';

const App: React.FC = () => {

  const [val, setVal] = useState<number>(0);

  function incrementVal(){
    setVal(val+1);
  }

  function decrementVal(){
    setVal(val-1);
  }

  function resetVal(){
    setVal(0);
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-black text-white gap-y-10 flex flex-col justify-center items-center">

      <p className='text-4xl '>Counter App</p>

      <CounterPage val={val} decrementVal={decrementVal} incrementVal={incrementVal} resetVal={resetVal} />
    </div>
  );
}

export default App;
