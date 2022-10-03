import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react"
import { LoginPage } from "./loginPage"

beforeEach(() => render(<LoginPage />))

describe("When login page is mounted", () => {

    it("must display the login word", () => {
        expect(screen.getByText(/Login/i)).toBeInTheDocument()
    })

    it("must display a form with email, password and a submit button", () => {
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /send/i }))
    })

})
