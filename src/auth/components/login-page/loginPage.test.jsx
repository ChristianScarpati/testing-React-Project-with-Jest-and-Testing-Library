import '@testing-library/jest-dom';

import { render, screen, fireEvent } from "@testing-library/react"
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

describe("when the user leaves empty fields and click submits button 1", () => {
    it("required messages as the format: The [field name] is required", () => {
        expect(screen.queryByText(/the email is required/i)).not.toBeInTheDocument() //corroboramos que no se encuentre en el docuemnto
        expect(screen.queryByText(/the password is required/i)).not.toBeInTheDocument()

        fireEvent.click(screen.getByRole('button', { name: /send/i }))

        expect(screen.getByText(/the email is required/i)).toBeInTheDocument()
        expect(screen.getByText(/the password is required/i)).toBeInTheDocument()
    })
})

describe("when the user fills the fields and click the submit button 2", () => {
    it("must not display the required messages", () => {
        //llenar valores del input con .value
        screen.getByLabelText(/email/i).value = 'john.doe@test.com'
        screen.getByLabelText(/password/i).value = 'pepito123!'

        fireEvent.click(screen.getByRole('button', { name: /send/i }))
        expect(screen.queryByText(/the email is required/i)).not.toBeInTheDocument() //corroboramos que no se encuentre en el docuemnto

    })

})
