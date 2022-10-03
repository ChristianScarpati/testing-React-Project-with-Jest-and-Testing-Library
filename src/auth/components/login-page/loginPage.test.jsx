import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react"
import { LoginPage } from "./loginPage"


describe("When login page is mounted", () => {
    it("must display the login word", () => {
        render(<LoginPage />)
        
        expect(screen.getByText(/Login/i)).toBeInTheDocument()
    })
})
