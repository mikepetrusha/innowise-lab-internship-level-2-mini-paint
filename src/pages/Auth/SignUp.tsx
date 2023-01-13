import React, { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Auth.css";

const SignUp: FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
  };

  async function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
    } else {
      try {
        setLoading(true);
        await signup(email, password);
        toast.success("Successfully created!");
        navigate("/signin");
      } catch {
        toast.error("Failed to create an account");
      }
      setLoading(false);
    }
  }

  return (
    <div className="wrapper">
      <h2 className="auth-title">Sign Up</h2>
      <Toaster position="top-right" />
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-input-container">
          <h3 className="input-title">Email</h3>
          <input
            className="auth-input"
            type="email"
            autoComplete="on"
            onChange={handleChangeEmail}
            value={email}
            required
          />
        </div>
        <div className="auth-input-container">
          <h3 className="input-title">Password</h3>
          <input
            className="auth-input"
            type="password"
            autoComplete="on"
            onChange={handleChangePassword}
            value={password}
            required
          />
        </div>
        <div className="auth-input-container">
          <h3 className="input-title">Confirm Password</h3>
          <input
            className="auth-input"
            type="password"
            autoComplete="on"
            onChange={handleChangeConfirmPassword}
            value={confirmPassword}
            required
          />
        </div>
        <div>
          <input
            className="primary-button"
            type="submit"
            value="Sign Up"
            disabled={loading}
          />
        </div>
      </form>
      <h2 className="auth-info">
        Already have an account?
        <NavLink to="/signin" className="link">
          Sign In
        </NavLink>
      </h2>
    </div>
  );
};

export default SignUp;
