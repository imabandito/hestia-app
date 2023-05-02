/* eslint-disable testing-library/no-render-in-setup */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "..";
import { BrowserRouter as Router } from "react-router-dom";

describe('heroSection component', () => {
  beforeEach(() => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('heroSection')).not.toBeNull();
  });
});
