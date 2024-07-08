import { useInput } from "../hooks/useInput";
import { isEmailOK, isPasswordOK } from "./Validation";
import Input from "./Input.jsx";
import './Input.css'
export default function LogIn() {

    const {
        value : emailValue,
        handleInputChange : handleEmailChange,
        handleOnBlur : handleEmailBlur,
        hasError : EmailError,
        handleReset : resetEmail
    } = useInput('', isEmailOK);

    const {
        value : passwordValue,
        handleInputChange : handlePasswordChange,
        handleOnBlur : handlePasswordBlur,
        hasError : PasswordError,
        handleReset : resetPassword
    } = useInput('', isPasswordOK);

    const handleSubmit = (event)=>{
        event.preventDefault();
    };
    
    const Resetdata = () =>{
        resetEmail();
        resetPassword();
    }
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
            <div className="form-actions">
                <button type="reset" className="button button-flat" onClick={Resetdata}>Reset</button>
                <button type="submit" className="button" onClick={handleSubmit}>Login</button>
            </div>
        </form>
    )
}