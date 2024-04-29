import "@testing-library/jest-dom";

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import { TodoPicker } from "./todo-picker";

describe("TodoPicker", () => {
  it("renders without crashing", () => {
    render(<TodoPicker />);
  });

  it("passes props to Calendar component", () => {
    const { container } = render(<TodoPicker isHolidaysVisible={false} />);
    const calendarCell = container.querySelector("[data-holiday]");
    expect(calendarCell).toHaveAttribute("data-holiday", "false");
  });

  it("adds new todo when clicking add", async () => {
    render(<TodoPicker />);
    const todoInput = screen.getByTestId("todo-input");
    const todoAddButton = screen.getByTestId("todo-add");

    await act(() => {
      fireEvent.change(todoInput, { target: { value: "Make unit tests" } });
      fireEvent.click(todoAddButton);
    });
    await waitFor(() =>
      expect(screen.getByText("Make unit tests")).toBeInTheDocument()
    );
  });

  it("removes todo when clicking remove", async () => {
    render(<TodoPicker />);
    const todoInput = screen.getByTestId("todo-input");
    const todoAddButton = screen.getByTestId("todo-add");

    await act(() => {
      fireEvent.change(todoInput, { target: { value: "Make pelmeni" } });
      fireEvent.click(todoAddButton);
    });

    const todoRemoveButton = await waitFor(
      () => screen.getAllByTestId("todo-remove")[1]
    );
    fireEvent.click(todoRemoveButton);

    await waitFor(() =>
      expect(screen.queryByText("Make pelmeni")).not.toBeInTheDocument()
    );
  });
});
