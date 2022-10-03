import { useState } from 'react'
import { TextField, Button } from "@material-ui/core"

export const LoginPage = () => {

    const [emailValidationMessage, setEmailValidationMessage] = useState('')
    const [passwordValidationMessage, setPasswordValidationMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = e.target.elements //deben coincidir con su id
        if (!email.value) setEmailValidationMessage("the email is required")
        if (!password.value) setPasswordValidationMessage("the password is required")
        
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
