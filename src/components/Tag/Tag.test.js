/* eslint-disable testing-library/no-render-in-setup */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Tag } from "..";

describe("tag component", () => {
  beforeEach(() => {
    render(<Tag type="sale" />);
  });

  it("component rendered", () => {
    expect(screen.getByText(/sale/i)).not.toBeNull();
  });
});
