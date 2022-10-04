import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into prop", () => {
  render(<Header title="My Header" />);
  const linkElement = screen.getByText(/my header/i);
  expect(linkElement).toBeInTheDocument();
});

it("should render same text passed into prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  expect(headingElement).toBeInTheDocument();
});

it("should have one heading element only", async () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(1);
});
