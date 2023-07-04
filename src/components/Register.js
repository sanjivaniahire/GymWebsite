import React, { useState } from "react";
import "./register.css";
import { faGoogle, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Perform registration logic here (e.g., API call)

    // Save user details to local storage
    const userDetails = {
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(userDetails));

    // Reset form fields
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
    setErrorMessage("");
  };

  const handleResetPassword = () => {
    // Perform reset password logic here (e.g., API call)

    setForgotPassword(false);
  };

  return (
    <div className="register-container">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {!forgotPassword && (
          <>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm your password"
                required
              />
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit">Register</button>
            <p className="forgot-password" onClick={handleForgotPassword}>
              Forgot Password?
            </p>

            <div className="social-login">
              <p>Register using:</p>
              <div className="social-buttons">
                <button type="button" className="social-button google-button">
                  <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button type="button" className="social-button facebook-button">
                  <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button type="button" className="social-button twitter-button">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
              </div>
            </div>
          </>
        )}

        {forgotPassword && (
          <>
            <p className="forgot-password-message">
              Enter your email to receive a password reset link.
            </p>
            <div className="form-group">
              <input
                type="email"
                id="forgotEmail"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="button" className="reset-password-button" onClick={handleResetPassword}>
              Reset Password
            </button>
            <p className="cancel-link" onClick={() => setForgotPassword(false)}>
              Cancel
            </p>
          </>
        )}
      </form>
    </div>
  );
}

export default Register;
