import { useState } from "react"
import { useInput } from "../hooks/useInput";
export default function LogIn() {

    const {
        value : emailValue,
        handleInputChange : handleEmailChange,
        handleOnBlur : handleEmailBlur,
        hasError : EmailError
    } = useInput('', emailisValid);

    const {
        value : passwordValue,
        handleInputChange : handlePasswordChange,
        handleOnBlur : handlePasswordBlur,
        hasError : PasswordError
    } = useInput('', passwordisValid);

    const handleSubmit = (event)=>{
        event.preventDefault();
    };

    const emailisValid = (email) =>{
        const emailRegax = /^[a-zA-Z]+@[a-zA-Z0-9]+$/;
        return emailRegax.test(email)
    };

    const passwordisValid = (password) =>{
        return password.length >= 8;
    };
    
    return (
        <form>
            <div className="control-row">
                <Input
                    label="email"
                    id="email"
                    name="email"
                    onChange={handleEmailChange}
                    value = {emailValue}
                    onBlur = {handleEmailBlur}
                    error = {EmailError}
                />
                <Input
                    label="password"
                    id="password"
                    name="password"
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    onBlur = {handlePasswordBlur}
                    error = {PasswordError}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" onClick={handleSubmit}>Login</button>
            </p>
        </form>
    )
}