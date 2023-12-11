import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./state/counter/counterSlice";
import { quotesAsync } from "./state/quote/quoteSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [quote, setQuote] = useState(null);

  const count = useSelector((state) => state.counter.value);
  const quotes = useSelector((state) => state.quotes.value);

  const dispatch = useDispatch();

  const inc = () => dispatch(increment());
  const dec = () => dispatch(decrement());
  const incByAmt = () => dispatch(incrementByAmount(amount));
  const decByAmt = () => dispatch(decrementByAmount(amount));

  const getQuotes = () => setQuote(dispatch(quotesAsync()));

  return (
    <>
      <h1>Learn Redux Toolkit</h1>
      <div className="card">
        <h2>Counter: {count}</h2>
        <button className="me-2" onClick={inc}>
          +
        </button>
        <button onClick={dec}>-</button>
        <hr className="my-2" />
        <label className="mb-2">
          Custom Amount{" "}
          <input
            type="number"
            step={1}
            value={amount}
            onChange={() => setAmount(+event.target.value)}
          />
        </label>
        <br />
        <button className="me-2" onClick={incByAmt}>
          + {amount}
        </button>
        <button onClick={decByAmt}>- {amount}</button>
        <hr className="my-2" />
        <button onClick={getQuotes}>Get Quotes</button>
        <br />
        {quote !== null && quote.length > 0 && (
          <div key={quote.quotes.id} id={quote.quotes.id}>
            <label>{quote.quotes.author}</label>
            <p>{quote.quotes.quote}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
