import React, { useState } from "react";
import CountImg from "./assets/myImg.jpg";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count - 1);
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
          <img width={"100px"} className="rounded-circle" src={CountImg} alt="Count" />
        </div>
        <h2 className="fs-3 fw-bold mb-5">My Latest Counter App</h2>
        <p className="display-4 fw-bold">{count}</p>
        <div className="d-flex align-items-center justify-content-between gap-5">
          <Button
            disabled={count === 10}
            label={"Increment"}
            variant={"btn-success"}
            handleFunction={handleAdd}
          />

          <Button
            disabled={count === 0}
            label={"Decreament"}
            variant={"btn-primary"}
            handleFunction={handleSub}
          />
          <Button disabled={count === 0} label={"Reset"} variant={"btn-danger"} handleFunction={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default App;
