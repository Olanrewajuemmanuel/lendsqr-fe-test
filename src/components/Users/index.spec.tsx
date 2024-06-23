import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { describe } from "node:test";
import Users from ".";

describe("describe the Users page", () => {
    it("should render 10 rows of user data", async () => {
        render(<Users />);


        await waitFor(() => expect(screen.getAllByTestId("row")).toHaveLength(10));
    });
});
