import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <Router>
      <Todo />
    </Router>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should be able to add a task", () => {
    render(<MockTodo />);

    const tasks = ["Grocery Shopping"];
    addTask(tasks);
    const divElement = screen.getByText(RegExp(tasks[0]));
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items", () => {
    render(<MockTodo />);
    const task = "Grocery Shopping";
    const tasks = [task, task, task];
    addTask(tasks);
    const divElements = screen.getAllByText(RegExp(task));
    expect(divElements.length).toBe(3);
  });

  it("should not have complete class when initially rendered", () => {
    render(<MockTodo />);
    const task = "Grocery Shopping";
    const tasks = [task];
    addTask(tasks);
    const divElement = screen.getByText(RegExp(task));
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should have complete class after being clicked", () => {
    render(<MockTodo />);
    const task = "Grocery Shopping";
    const tasks = [task];
    addTask(tasks);
    const divElement = screen.getByText(RegExp(task));
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
