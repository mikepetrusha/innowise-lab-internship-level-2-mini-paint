import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useAuth } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { currentUserEmail, signout } = useAuth();
  const [error, setError] = useState<string>("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  async function handleLogOut() {
    setError("");

    try {
      await signout();
      navigate("/signin");
    } catch {
      setError("Failed to sign out");
    }
  }

  if (error !== "") {
    toast.error(error);
  }

  const handleDraw = () => {
    navigate("/editor");
  };
  return (
    <div className="header">
      <Toaster position="top-right" />
      <NavLink to="/" className="page-title">
        Paint
      </NavLink>
      <label className="theme">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </label>
      <ReactSwitch
        className="themeSwitch"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />

      <h3 className="email-title">Account: {currentUserEmail}</h3>
      <button
        className="primary-button header-button"
        type="submit"
        onClick={handleDraw}
      >
        Draw
      </button>
      <button
        className="primary-button header-button"
        type="submit"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}
