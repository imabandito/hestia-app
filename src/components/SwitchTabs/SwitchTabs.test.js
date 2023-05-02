/* eslint-disable testing-library/no-render-in-setup */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { SwitchTabs } from "../index";
import { tabsData } from "./tabsData";
import { BrowserRouter } from "react-router-dom";

describe("SwitchTabs component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SwitchTabs tabs={tabsData} />
      </BrowserRouter>
    );
  });

  it("component generated", () => {
    expect(screen.getByTestId("switch-tabs")).not.toBeNull();
  });

  it("tab changed", () => {
    const button = screen.getByRole("button", {
      name: /characteristics/i,
    });
    fireEvent.click(button);
    expect(button.classList.contains("button_tab-active")).toBe(true);
  });
});
