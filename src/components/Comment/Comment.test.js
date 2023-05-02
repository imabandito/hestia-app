/* eslint-disable testing-library/no-render-in-setup */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { commentData } from "./CommentData";
import { Comment } from "./Comment";

describe("comment component", () => {
  beforeEach(() => {
    render(<Comment comment={commentData[0]} />);
  });

  it("component rendered", () => {
    expect(screen.getByText(/anastasiia/i)).not.toBeNull();
  });

  it("checking if each star rating button is diasbled", () => {
    const starButtons = screen.getAllByRole("button");
    starButtons.forEach((btn) => expect(btn).toHaveProperty("disabled"));
  });
});
