import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodos = jest.fn();

describe("AddInput", () => {
  it("should render the input element", async () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
    expect(inputElement).toBeInTheDocument();
  });

  it("should display typed input", async () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../);

    const sampleInput = "Go Grocery Shopping";
    fireEvent.change(inputElement, { target: { value: sampleInput } });
    expect(inputElement.value).toBe(sampleInput);
  });

  it("should have empty input after button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../);

    const sampleInput = "Go Grocery Shopping";
    fireEvent.change(inputElement, { target: { value: sampleInput } });

    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
