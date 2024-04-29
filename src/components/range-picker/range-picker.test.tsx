import "@testing-library/jest-dom";

import { act, fireEvent, render, screen } from "@testing-library/react";

import { parseInputDate } from "@/utils";

import { RangePicker } from "./range-picker";

describe("RangePicker", () => {
  it("handles correctly date range by default", () => {
    render(<RangePicker />);
    const fromInput = screen.getByTestId("range-from-input");
    const toInput = screen.getByTestId("range-to-input");
    expect(fromInput).toBeInTheDocument();
    expect(toInput).toBeInTheDocument();
  });

  describe("RangePicker", () => {
    it("should set initial from and to range values to current date", () => {
      const currentDate = new Date();
      render(<RangePicker />);

      const fromInput = screen.getByTestId("range-from-input");
      expect(fromInput).toHaveValue(parseInputDate(currentDate));

      const toInput = screen.getByTestId("range-to-input");
      expect(toInput).toHaveValue(parseInputDate(currentDate));
    });
  });

  it("should handle mouse events", async () => {
    render(<RangePicker value="12/11/2023" />);
    const cellfrom = screen.getAllByText("12")[0];
    const cellTo = screen.getAllByText("16")[0];
    await act(async () => {
      fireEvent.mouseDown(cellfrom);
      fireEvent.mouseUp(cellTo);
    });

    const fromInput = screen.getByTestId(
      "range-from-input"
    ) as HTMLInputElement;
    const toInput = screen.getByTestId("range-to-input") as HTMLInputElement;
    expect(fromInput.value).toBe("12/11/2023");
    expect(toInput.value).toBe("16/11/2023");
  });
});
