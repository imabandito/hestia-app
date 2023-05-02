import "@testing-library/jest-dom";
import { RecentlyViewedSlider } from "./RecentlyViewedSlider";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { recentlyViewedItems } from "../RecentlyViewedItem/data-recentlyViewedItem";

describe("recently viewed item component", () => {
  beforeEach(() => {
    render(
      <Router>
        <RecentlyViewedSlider data={recentlyViewedItems} />
      </Router>
    );
  });

  it("component rendered", () => {
    expect(screen.getByTestId("recently-viewed-swiper")).toBeInTheDocument();
  });

  it("correct number of slider items", () => {
    expect(
      screen.getByTestId("recently-viewed-swiper").children[0].childElementCount
    ).toBe(recentlyViewedItems.length);
  });
});
