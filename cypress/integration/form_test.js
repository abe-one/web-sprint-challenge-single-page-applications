// Set up - sanity checks (ensure initial state is as expected)
// Act - user actions (typing, clicking)
// Assert - actions consequences as expected

import { toppings as tops } from "../../src/App";

describe("Pizza Form Page", () => {
  // Prerequisites
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // Selector Functions
  const nameInput = () => cy.get("input[name=,'name']");
  // Input Variables (Optional)

  // Tests
  it("Is sane", () => {
    expect(2 + 2).to.equal(4);
    expect(2 + 2).to.equal("fish");
  });
}); //Pizza Form Page
