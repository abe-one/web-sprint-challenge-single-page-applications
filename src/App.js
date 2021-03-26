// Dependencies
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import schema from "./form_schema";
// Components
import Home from "./Home";
import OrderForm from "./OrderForm";
/* 

###COMPONENT###
  Form ("/pizza")
    INPUT(text, dropdown, checklist, text)
    Button
    (Validation)
    STATES
    Refractor component exports
*/

// Exports
export const toppings = ["extraCheese", "pepperoni", "mushrooms", "pineapple"];
export const pizzaSizes = ["personal", "medium", "large", "extraLarge"];

const App = () => {
  // Initial Values
  const initialFormValues = {
    inputName: "",
    size: "",
    specialInstructions: "",
  };

  const initialFormErrors = {
    ...initialFormValues,
  };

  toppings.forEach((topping) => (initialFormValues[topping] = false));
  toppings.forEach((topping) => (initialFormErrors[topping] = ""));
  // Include toppings in initial values

  // States
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  // Helpers
  const postOrder = (order) => {
    axios
      .post("https://reqres.in/api/users", order)
      .then((res) => {
        console.log(res.data);
        setFormValues(initialFormValues);
      })
      .catch((err) => console.log(err));
  };
  // Event Handlers
  const inputChange = (inputName, value) => {
    setFormValues({
      ...formValues,
      [inputName]: value,
    });
    yup
      .reach(schema, inputName)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [inputName]: "" }));
  };

  const submitForm = () => {
    const order = {
      // ...formValues, [name].trim()/////////////////////////////////////////////
    };
    postOrder(order);
  };

  // Effects
  schema.isValid(formValues).then((valid) => setDisabled(!valid));
  // Return

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/pizza">Pizza</Link>
      </header>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza">
          <OrderForm />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
