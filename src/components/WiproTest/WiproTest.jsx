import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const url = "https://jsonplaceholder.typicode.com/todos/1";

const upperCaseStr = (str) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

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
    <>
      <p>
        Test 1 : Display the name from input when display name button is clicked
        and countdown equals to zero
      </p>
      <div className="card">
        <input
          type="text"
          onChange={() => setInput(event.target.value)}
          value={input}
          className="me-2"
          placeholder="Enter your name.."
        />
        <button
          className={"wipro " + (counter < 11 ? "me-2" : "")}
          onClick={displayName}
          disabled={counter < 11}
        >
          Display Name
        </button>
        {counter >= 0 && counter < 11 && (
          <button className="wipro" onClick={() => setCounter(counter + 1)}>
            Countdown - {11 - counter}
          </button>
        )}
      </div>
      {isBtnClicked && counter > 10 && (
        <>
          <h1>Hello {input} !</h1>
        </>
      )}
      <hr className="my-2" />
      <p>Test 2 : API Call</p>
      <div className="card read-the-docs">
        {quoteData !== null && <h2>Title: {upperCaseStr(quoteData.title)}</h2>}
      </div>
    </>
  );
}
