import React from "react";

import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Combobox from "./Combobox";

describe("combobox component test", () => {
  it("should have label", () => {
    render(<Combobox label="etykieta" />);
    const combobox = screen.getByLabelText("etykieta");
    expect(combobox).toBeInTheDocument();
  });

  it("should have items", async () => {
    const mockFn = jest.fn();
    render(
      <Combobox
        items={[
          { value: 1, label: "first" },
          { value: 2, label: "second" },
        ]}
        changed={mockFn}
      />
    );

    const selectButton = within(screen.getByTestId("testselect")).getByRole(
      "button"
    );

    userEvent.click(selectButton);
    expect(await screen.findByRole("presentation")).toBeInTheDocument();
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);

    const firstOption = options.filter(
      (opt) => opt.getAttribute("data-value") === "1"
    )[0];
    fireEvent.click(firstOption);

    expect(mockFn).toBeCalledWith(1);
  });
});
