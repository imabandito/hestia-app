/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import { AccordionItem } from "./AccordionItem";
import { accordionItemData } from "./AccordionItemData";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("AccordionItem component", () => {
  beforeEach(() =>
    render(
      <Router>
        <AccordionItem accordion={accordionItemData} />
      </Router>
    )
  );

  it("component rendered", () => {
    expect(screen.getByTestId("accordionItem")).not.toBeNull();
  });

  it("accordion opens after click and closes after click again", () => {
    expect(screen.getByTestId("accordionItem")).not.toHaveClass(
      "accordion-item_opened"
    );
    fireEvent.click(screen.getByTestId("openAccordionButton"));
    expect(screen.getByTestId("accordionItem")).toHaveClass(
      "accordion-item_opened"
    );
    fireEvent.click(screen.getByTestId("openAccordionButton"));
    expect(screen.getByTestId("accordionItem")).not.toHaveClass(
      "accordion-item_opened"
    );
  });
});
