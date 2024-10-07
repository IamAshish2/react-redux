import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const inputVal = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const newAction = {
      type: "INCREMENT",
    };
    dispatch(newAction);
  };

  const handleDecrement = () => {
    const newAction = {
      type: "DECREMENT",
    };
    dispatch(newAction);
  };

  const handleSubtract = () => {
    const newAction = {
      type: "SUBTRACT",
      payload: {
        value: parseInt(inputVal.current.value),
      },
    };
    dispatch(newAction);
    inputVal.current.value = "";
  };

  const handleAdd = () => {
    const newAction = {
      type: "ADD",
      payload: {
        value: parseInt(inputVal.current.value),
      },
    };
    dispatch(newAction);
    inputVal.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          onClick={handleIncrement}
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
        >
          Decrement
        </button>
        <button
          onClick={handlePrivacyToggle}
          className="btn btn-warning rounded-pill px-3"
          type="button"
        >
          Privacy
        </button>
        <div
          className=""
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <input ref={inputVal} type="text" />
          <div style={{ marginRight: "2px" }}>
            <button
              onClick={handleAdd}
              style={{ marginRight: "4px" }}
              className="btn btn-success rounded-pill px-3"
              type="button"
            >
              Add
            </button>
            <button
              onClick={handleSubtract}
              className="btn btn-danger rounded-pill px-3"
              type="button"
            >
              Subtract
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
