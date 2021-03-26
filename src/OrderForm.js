import React from "react";
import { Link } from "react-router-dom";
import { pizzaSizes } from "./App";

const OrderForm = ({ values, update, submit, disabled, errors }) => {
  const onChange = (e) => {
    let { name, value } = e.target;
    update(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <h2>Tell us, how would you like us to build YOUR Pizza?</h2>
      <label>
        Name
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={onChange}
          placeholder="Your Name"
        />
      </label>
      <label>
        Size
        <select name="size" type="select" onChange={onChange}>
          <option value="">Select Size</option>
          {pizzaSizes.map((size) => {
            return (
              <option value={size}>
                {size
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^\w/, (c) => c.toUpperCase())}
                {/*Space between camelCase and capitalize 1st letter */}
              </option>
            );
          })}
          ;
        </select>
      </label>
      <button disabled={disabled}>Place YOUR Order</button>
    </form>
  );
};

export default OrderForm;
