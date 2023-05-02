/* eslint-disable testing-library/no-render-in-setup */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ColorPicker } from "./ColorPicker";
import { productItems } from "../CatalogItem/CatalogItemData";

describe("colorPicker component", () => {
  beforeEach(() => {
    render(
      <ColorPicker
        colors={productItems[0].products.map(({ color }) => color)}
        widthAndHeight={{ width: 12, height: 12 }}
      />
    );
  });

  it("component rendered", () => {
    expect(screen.getAllByTestId("color-picker-label").length).not.toBe(0);
  });

  it("second button becomes selected after click", () => {
    fireEvent.click(screen.getByTestId("color-1"));
    expect(screen.getByTestId("color-1")).toBeChecked();
  });
});
