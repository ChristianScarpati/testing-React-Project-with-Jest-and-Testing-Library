import '@testing-library/jest-dom';

import { render, screen, fireEvent } from "@testing-library/react"
import { LoginPage } from "./loginPage"

beforeEach(() => render(<LoginPage />))

const passwordValidationMessage = "The password input should contain at least: 8 characters, one upper case letter, one number and one special character"

const getPasswordInput = () => screen.getByLabelText(/password/i)


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

describe("when the user fills and blur the email input with invalid email", () => {
    it("must display a validation message the email is invalid. Example: John.doe@mail.com", () => {
        const emailInput = screen.getByLabelText(/email/i)
        //change and blur email input
        fireEvent.change(emailInput, { target: { value: 'invalid.email' } })
        fireEvent.blur(emailInput) //blur xq es el elem que pierdo el foco del cursor (saco afuera del input)
        //expect
        expect(screen.getByText(/the email is invalid. Example: John.doe@mail.com/i))

    })
})

describe("when the user fills and blur the password input with a invalid value and then change with valid value and blur again", () => {
    it("must not display the validation message", () => {

        const passwordWithoutSpecialChar = 'asdasdA1sd'
        const validPassword = 'aAfweffewaa2#'

        fireEvent.change(getPasswordInput(), { target: { value: passwordWithoutSpecialChar } })
        fireEvent.blur(getPasswordInput())

        expect(screen.getByText(passwordValidationMessage)).toBeInTheDocument()

        fireEvent.change(getPasswordInput(), { target: {value: validPassword}})
        fireEvent.blur(getPasswordInput())

        expect(screen.queryByText(passwordValidationMessage)).not.toBeInTheDocument()
    })

})


