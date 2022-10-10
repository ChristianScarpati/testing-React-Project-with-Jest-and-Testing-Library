import { useState } from 'react'
import { Button, TextField } from "@material-ui/core"
import { Stack } from '@mui/material'


const passwordValidationsMsg =
`The password input should contain at least: 8 characters, one upper case letter, one number and one special character`

function validateEmail(email) {
    const regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
    return regex.test(email)
}

const validatePassword = password => {
    const passwordRulesRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    return passwordRulesRegex.test(password)
}

export const LoginPage = () => {

    const [emailValidationMessage, setEmailValidationMessage] = useState('')
    const [passwordValidationMessage, setPasswordValidationMessage] = useState('')
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = e.target.elements //deben coincidir con su id
        if (!email.value) setEmailValidationMessage("the email is required")
        if (!password.value) setPasswordValidationMessage("the password is required")
    }

    const handleChange = ({ target: { value, name } }) => {
        setFormValues({ ...formValues, [name]: value })
    }

    const handleBlurEmail = () => {
        if (!validateEmail(formValues.email)) {
            setEmailValidationMessage("the email is invalid. Example: John.doe@mail.com")
            return
        }
        setEmailValidationMessage('')
    }

    const handleBlurPassword = () => {
        if (!validatePassword(formValues.password)) {
            setPasswordValidationMessage(passwordValidationsMsg)
            return
        }
        setPasswordValidationMessage('')
    }

    return (
        <Stack direction='column' sx={{ border: '1px solid black' }} >
            <h1>login</h1>

            <form onSubmit={handleSubmit}>
                <Stack>

                    <TextField
                        label="email"
                        id="email"
                        name="email"
                        helperText={emailValidationMessage}
                        onChange={handleChange}
                        value={formValues.email}
                        onBlur={handleBlurEmail}
                    />
                </Stack>
                <Stack>
                    <TextField
                        label="password"
                        id="password"
                        name="password"
                        type="password"
                        helperText={passwordValidationMessage}
                        onChange={handleChange}
                        value={formValues.password}
                        onBlur={handleBlurPassword}
                    />
                </Stack>
                <Button type="submit">send</Button>
            </form>
        </Stack>
    )
}


export default LoginPage
