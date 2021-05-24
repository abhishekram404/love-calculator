import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "../redux/actions/action";

const Names = () => {
  const [names, setNames] = useState({
    partner1: "",
    partner2: "",
  });

  const dispatch = useDispatch();

  // dispatch(calculate());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    dispatch(calculate(names));
  };

  const handleChange = (e) => {
    setNames({
      ...names,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="name-comp" onSubmit={handleSubmit}>
      <div className="name first">
        <h4>Name 1: </h4>
        <input
          className="input"
          placeholder="First Name Here"
          name="partner1"
          onChange={handleChange}
          value={names.partner1}
        />
      </div>
      <div className="name second">
        <h4>Name 2: </h4>
        <input
          className="input"
          placeholder="Second Name Here"
          name="partner2"
          onChange={handleChange}
          value={names.partner2}
        />
      </div>

      <div className="button">
        <button type="submit" className="calculate">
          Calculate
        </button>
      </div>
    </form>
  );
};

export default Names;
