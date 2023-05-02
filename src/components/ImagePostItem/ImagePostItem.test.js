/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ImagePostItem } from "./ImagePostItem";
import { posts } from "./ImagePostItemData";

describe("copmonent ImagePostItem", () => {
  beforeEach(() => {
    render(
      <Router>
        <ImagePostItem post={posts[0]} />
      </Router>
    );
  });

  it("component rendered", () => {
    expect(screen.getByTestId("imagePostItem")).not.toBeNull();
  });

  it("description is opened", () => {
    fireEvent.click(screen.getByTestId("imagePostDescrBtn"));
    expect(
      screen
        .getByTestId("imagePostDescr")
        .classList.contains("descr-accordion_active")
    ).toBe(true);
  });
});
