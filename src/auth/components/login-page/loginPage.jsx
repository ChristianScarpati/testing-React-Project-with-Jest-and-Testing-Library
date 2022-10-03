import { TextField, Button } from "@material-ui/core"

export const LoginPage = () => {


    return (
        <>
            <h1>login</h1>
            <TextField label="email" id="email" />
            <TextField label="password" id="password" type="passwword" />
            <Button>send</Button>
        </>
    )
}


export default LoginPage
