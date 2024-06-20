import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe } from "node:test";
import Login from "@/components/Login/index";

describe("describe the Login page", () => {
    it('should render the login page', () => {
        render(<Login />);

        const welcomeElem = screen.getByTestId('welcomeText');
        const welcomeText = "Enter details to login.";

        expect(welcomeElem).toHaveTextContent(welcomeText);

    })

    it('should render the login form', () => {
        render(<Login />);

        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
        expect(screen.getByText(/log in/i)).toBeInTheDocument();
    })

    it('should render the button as disabled', () => {
        render(<Login />);

        const button = screen.getByText(/log in/i)

        expect(button).toBeDisabled();
    })

    it('should display error message with invalid credentials', async () => {
        render(<Login />);

        const emailInput = screen.getByPlaceholderText(/email/i);
        const passwordInput = screen.getByPlaceholderText(/password/i);
        fireEvent.change(emailInput, {
            target: { value: 'wrong@example.com' },
        });
        fireEvent.change(passwordInput, {
            target: { value: 'wrongpassword' },
        });
        fireEvent.click(screen.getByText(/log in/i));

        await waitFor(() => {
            expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
        });
    });
})
