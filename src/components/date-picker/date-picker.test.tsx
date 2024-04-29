import "@testing-library/jest-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { DatePicker } from "./date-picker";

describe("DatePicker", () => {
  it("renders without crashing", () => {
    render(<DatePicker />);
  });

  it("sets initial date to provided value", () => {
    render(<DatePicker value={"01/02/2020"} />);
    expect(screen.getByTestId("calendar-type")).toHaveTextContent(
      "February 2020"
    );
  });

  it("select prev year on month change", async () => {
    render(<DatePicker value={"01/01/2020"} />);

    fireEvent.click(screen.getByTestId("prev-month"));
    await waitFor(() =>
      expect(screen.getByTestId("calendar-type")).toHaveTextContent(
        "December 2019"
      )
    );
  });

  it("select next year on month change", async () => {
    render(<DatePicker value={"30/12/2020"} />);

    fireEvent.click(screen.getByTestId("next-month"));

    await waitFor(() =>
      expect(screen.getByTestId("calendar-type")).toHaveTextContent(
        "January 2021"
      )
    );
  });
});
