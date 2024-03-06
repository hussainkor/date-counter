import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h2>Date Counter</h2>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const stepIncrement = () => setStep((s) => s + 1);
  const stepDecrement = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  const incrementCount = () => setCount((c) => c + step);
  const decrementCount = () => setCount((c) => c - step);
  return (
    <div className="date-counter">
      <div className="steps">
        <button onClick={stepDecrement}>-</button>
        <p>Step: {step}</p>
        <button onClick={stepIncrement}>+</button>
      </div>
      <div className="date">
        <DateChanger count={count} />
      </div>
      <div className="counter">
        <button onClick={decrementCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

function DateChanger(props) {
  const count = props.count;

  const date = new Date();
  date.setDate(date.getDate() + count);

  const checkDate =
    count > 0 ? `${count} days from today is` : `${count} days ago was`;

  const dater = count > 0 || count < 0 ? `${checkDate}` : "Today is";

  return (
    <div>
      <p>
        {dater} {date.toDateString()}
      </p>
    </div>
  );
}
