import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe } from "node:test";
import UserDetail from "@/components/UserDetails/index";

describe("describe the UserDetails component", () => {
  it("should render User details correctly", async () => {
    render(<UserDetail />);

    expect(screen.getByText("Telport")).toBeInTheDocument();
  });
});
