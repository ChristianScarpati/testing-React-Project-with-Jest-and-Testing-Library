import { useState } from 'react'
import { TextField, Button } from "@material-ui/core"

export const LoginPage = () => {

    const [emailValidationMessage, setEmailValidationMessage] = useState('')
    const [passwordValidationMessage, setPasswordValidationMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmailValidationMessage("the email is required")
        setPasswordValidationMessage("the password is required")
    }


    return (
        <>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="email"
                    id="email"
                    helperText={emailValidationMessage} />
                <TextField
                    label="password"
                    id="password"
                    type="passwword"
                    helperText={passwordValidationMessage}
                />
                <Button type="submit">send</Button>
            </form>
        </>
    )
}


export default LoginPage
