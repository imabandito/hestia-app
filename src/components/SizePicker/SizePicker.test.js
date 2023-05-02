/* eslint-disable testing-library/no-render-in-setup */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { SizePicker } from "..";
import { productItems } from "../CatalogItem/CatalogItemData";

describe("sizePicker component", () => {
  const { sizes } = productItems[0];

  beforeEach(() => {
    render(<SizePicker sizes={sizes} />);
  });

  it("component rendered", () => {
    expect(screen.getAllByTestId("size-picker-label").length).not.toBe(0);
  });

  it("second button becomes selected after click", () => {
    fireEvent.click(screen.getByTestId("size-1"));
    expect(screen.getByTestId("size-1")).toBeChecked();
  });
});
