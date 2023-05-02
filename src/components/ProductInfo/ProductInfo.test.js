import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductInfo } from "..";
import { productItems } from "../CatalogItem/CatalogItemData";

describe("product info component", () => {
  const data = productItems[0];
  beforeEach(() => {
    render(
      <Router>
        <ProductInfo data={data} />
      </Router>
    );
  });

  it("component rendered", () => {
    expect(screen.getByTestId("product-info")).toBeInTheDocument();
  });
});
