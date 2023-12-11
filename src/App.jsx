import LearnRedux from "./components/LearnRedux/LearnRedux";
import WiproTest from "./components/WiproTest/WiproTest";
import { useState } from "react";

function App() {
  const [isRedux, setIsRedux] = useState(false);

  const toggleProject = () => {
    return isRedux ? (
      /*<LearnRedux />*/ <>
        <h2>Work in progress...</h2>
      </>
    ) : (
      <WiproTest />
    );
  };
  return (
    <>
      <button className="mb-2" onClick={() => setIsRedux((state) => !state)}>
        {!isRedux ? "Learn Redux" : "Wipro Test"}
      </button>
      <hr className="my-2" />
      {toggleProject()}
    </>
  );
}

export default App;
