import { useInput } from "../hooks/useInput";
import { Link } from "react-router-dom";
import { isEmailOK, isPasswordOK } from "./Validation";
import Input from "./Input.jsx";
import "./SignIn.css";

export default function LogIn() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleOnBlur: handleEmailBlur,
    hasError: EmailError,
    handleReset: resetEmail,
  } = useInput("", isEmailOK);

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleOnBlur: handlePasswordBlur,
    hasError: PasswordError,
    handleReset: resetPassword,
  } = useInput("", isPasswordOK);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:5000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.ok) {
      alert("Signin successfull");
    }
  };

  const Resetdata = () => {
    resetEmail();
    resetPassword();
  };

  return (
    <div className="sign-in-container">
      <div className="sideheader-sign-in">
        <h3>Welcome back :)</h3>
        <h1>Sign in to BrightFund !</h1>
        <Link to="..">
          <button className="button-flat-back">Back</button>
        </Link>
      </div>
      <section className="sign-in-form-container">
        <header className="sign-in-header">
          <p>
            Don't have an Account? <Link to="/signup">Sign Up</Link>
          </p>
        </header>
        <section className="form-section">
          <h3>Your account details</h3>
          <form>
            <div className="control-row">
              <Input
                label="email"
                id="email"
                name="email"
                onChange={handleEmailChange}
                value={emailValue}
                onBlur={handleEmailBlur}
                error={EmailError}
              />
              <Input
                label="password"
                id="password"
                name="password"
                onChange={handlePasswordChange}
                value={passwordValue}
                onBlur={handlePasswordBlur}
                error={PasswordError}
              />
            </div>
            <div className="form-actions">
              <button
                type="reset"
                className="button button-flat"
                onClick={Resetdata}
              >
                Reset
              </button>
              <button type="submit" className="button" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}
