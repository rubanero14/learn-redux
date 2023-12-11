import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const url = "https://jsonplaceholder.typicode.com/todos/1";

export default function WiproTest() {
  const [input, setInput] = useState("");
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [counter, setCounter] = useState(0);
  const [quoteData, setQuoteData] = useState(null);

  const displayName = () => {
    setIsBtnClicked(true);
  };

  // Call fetchData on component mount
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setQuoteData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={() => setInput(event.target.value)}
        value={input}
        className="me-2"
        placeholder="Enter your name.."
      />
      <button className="me-2" onClick={displayName}>
        Display Name
      </button>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      {isBtnClicked && counter > 10 && (
        <>
          <hr className="my-2" />
          <h1>Hello {input}!</h1>
        </>
      )}
      <hr className="my-2" />
      {quoteData !== null && <h2>Title: {quoteData.title}</h2>}
    </div>
  );
}
