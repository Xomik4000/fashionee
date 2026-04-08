import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import SearchBar from "./SearchBar";

function SearchBarHarness() {
  const [value, setValue] = useState("");

  return <SearchBar value={value} onChange={setValue} />;
}

describe("SearchBar", () => {
  it("allows the user to type search text into the search input", async () => {
    const user = userEvent.setup();

    render(<SearchBarHarness />);

    const input = screen.getByPlaceholderText(/search/i);

    expect(input).toHaveValue("");

    await user.type(input, "dress");

    expect(input).toHaveValue("dress");
  });

  it("passes the typed value to onChange", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<SearchBar value="" onChange={onChange} />);

    const input = screen.getByPlaceholderText(/search/i);

    await user.type(input, "ab");

    expect(onChange).toHaveBeenNthCalledWith(1, "a");
    expect(onChange).toHaveBeenNthCalledWith(2, "ab");
  });
});