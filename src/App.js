import React from "react";

/* 
###TESTS###
###COMPONENT###
  Homepage ("/") > Form 
###COMPONENT###
  Form ("/pizza")
    INPUT(text, dropdown, checklist, text)
    Button
    (Validation)
*/
export const toppings = ["extraCheese", "pepperoni", "mushrooms", "pineapple"];

const App = () => {
  return (
    <>
      <input name={toppings[0]} type="checkbox" value=""></input>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
