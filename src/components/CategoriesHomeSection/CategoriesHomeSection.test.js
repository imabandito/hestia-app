import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoriesHomeSection } from "../CategoriesHomeSection/CategoriesHomeSection.jsx";
import { categories } from "../../assets/images/indexImages";

describe("categories section", () => {
  beforeEach(() => {
    render(
      <Router>
        <CategoriesHomeSection data={categories} />
      </Router>
    );
  });

  it("component rendered", () => {
    expect(screen.getByTestId("categories-home-section")).toBeInTheDocument();
  });

  it("render correct number of items", () => {
    expect(
      screen.getByTestId("categories-home-section-row").childElementCount
    ).toBe(categories.length);
  });
});
