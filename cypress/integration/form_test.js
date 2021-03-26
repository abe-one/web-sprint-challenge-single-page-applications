// Set up - sanity checks (ensure initial state is as expected)
// Act - user actions (typing, clicking)
// Assert - actions consequences as expected

import { toppings } from "../../src/App";

describe("Pizza Form Page", () => {
  // Prerequisites
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // Selector Functions
  const nameInput = () => cy.get("input[name='name']");
  const sizeDropdown = () => cy.get("input=['size']");
  const toppingsCheckbox = (topping) => cy.get(`input[name='${topping}'`);
  const specInstr = () => cy.get("input[name=['specialInstructions']");
  const orderBtn = () => cy.get("button[class=['submit-button']");

  // Input Variables (Optional)
  const testName = "Jeffrey";
  const testInstr = "Uhuh, yeah, extra cheese.";
  const testSize = "Large";

  // Test functions (Optional)

  const checkInputsEmpty = () => {
    nameInput().should("have.value", "");
    sizeDropdown().should("have.value", "");
    toppings.forEach((topping) =>
      toppingsCheckbox(topping).should("not.be.checked")
    ); //Check all toppingpings
    specInstr().should("have.value", "");
  };

  // Tests
  it("Is sane", () => {
    expect(2 + 2).to.equal(4);
    expect(2 + 2).to.not.equal("fish");
  });

  it("Initializes empty", checkInputsEmpty);

  //////TEST VALIDATION HERE///////

  ////////////////////////////////

  it("Receives input, submits, and clears input", () => {
    // INPUT //
    nameInput().type(testName).should("have.value", testName);

    sizeDropdown().select(testSize).should("have.value", testSize);

    toppings.forEach((topping) =>
      toppingsCheckbox(topping).check().should("be.checked")
    );

    specInstr().type(testInstr).should("have.value", testInstr);
    // SUBMIT //
    orderBtn().click();
    checkInputsEmpty();
  });
}); //Pizza Form Page
