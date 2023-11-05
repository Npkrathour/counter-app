import React, { useState } from "react";
import CountImg from "./assets/myImg.jpg";

const App = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="container-fluid bg-secondary d-flex align-items-center justify-content-center"
    >
      <div className="p-5 bg-white rounded-3 text-center border-5 border border-success shadow-lg">
        <div className="counter-img">
          <img
            width={"100px"}
            className="rounded-circle"
            src={CountImg}
            alt="Count"
          />
        </div>
        <h2 className="fs-3 fw-bold mb-5">My Counter App</h2>
        <p className="display-4 fw-bold">{count}</p>
        <button
          className="btn btn-success py-2 px-5 me-5 rounded fw-bold"
          onClick={handleAdd}
        >
          Add +{" "}
        </button>
        <button
          disabled={count === 0 && true}
          className="btn btn-primary py-2 px-5 me-5 rounded fw-bold"
          onClick={handleSub}
        >
          Sub -{" "}
        </button>
        <button
          disabled={count === 0 ? true : false}
          className="btn btn-danger py-2 px-5 rounded fw-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
