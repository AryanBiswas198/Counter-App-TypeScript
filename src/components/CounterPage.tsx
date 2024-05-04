import React from "react";

interface Props{
    val: number;
    decrementVal: () => void;
    incrementVal: () => void;
    resetVal: () => void;
}

const CounterPage = ({val, decrementVal, incrementVal, resetVal}: Props) => {
  return (
    <div className="flex items-center flex-col gap-y-10">
      <div className="flex items-center gap-x-10">
        <button
          onClick={decrementVal}
          className="border-2 px-5  text-3xl rounded-xl"
        >
          -
        </button>

        <p className="text-4xl">{val}</p>
        
        <button
          onClick={incrementVal}
          className="border-2 px-5  text-3xl rounded-xl"
        >
          +
        </button>
      </div>

      <button
        onClick={resetVal}
        className="border 2 px-10 py-1 text-3xl rounded-xl"
      >
        Reset
      </button>
    </div>
  );
};

export default CounterPage;
