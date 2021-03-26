import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

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

const App = () => {
  // Initial Values
  const initialFormValues = {
    name: "",
    size: "",
    specialInstructions: "",
  };

  const initialErrorValues = {
    ...initialFormValues,
  };

  toppings.forEach((topping) => (initialFormValues[topping] = false));
  toppings.forEach((topping) => (initialErrorValues[topping] = ""));
  // Include toppings in initial values

  // States
  const [formValues, setFormValues] = useState(initialFormValues);
  const [erroValues, setErrorValues] = useState(initialErrorValues);
  // Helpers
  // Event Handlers
  // Effects
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
