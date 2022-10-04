import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import TodoFooter from "../TodoFooter";

const TodoFooterWrapper = ({ numberOfIncompleteTasks }) => {
  return (
    <Router>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </Router>
  );
};
describe("TodoFooter", () => {
  it(" should render the number of incomplete tasks passed into it as props", async () => {
    render(<TodoFooterWrapper numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/);
    expect(paragraphElement).toBeInTheDocument();
  });

  it(" should use singular 'task' for 1 unfinished task", async () => {
    render(<TodoFooterWrapper numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/);
    expect(paragraphElement).toBeInTheDocument();
  });

  it(" should be visible to the user", async () => {
    render(<TodoFooterWrapper numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByText(/2 tasks left/);
    expect(paragraphElement).toBeVisible();
  });
});
