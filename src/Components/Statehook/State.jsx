import { useState } from "react";

function ExampleState() {
  const [count, Setcount] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>Your count is {count}</h1>
        <div>
          <button
            onClick={() => {
              Setcount(count + 1);
            }}
            className="border bg-green-500 rounded-md p-3 text-white"
          >
            Increment
          </button>
          <button
            onClick={() => {
              Setcount(count -1);
            }}
            className="border bg-green-500 rounded-md p-3 text-white"
          >
            decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default ExampleState;
