import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UserDetail from "@/components/UserDetails/index";

describe("describe the UserDetails component", () => {
  it("should render User details correctly", () => {
    render(<UserDetail userId={"1"}/>);

    expect(screen.getByText("Telport")).toBeInTheDocument();
  });
});
