import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import Editor from "../pages/Editor/Editor";
import { useAuth } from "../contexts/AuthContext";

export default function AppRoute() {
  const { currentUserEmail } = useAuth();
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      {currentUserEmail && <Route path="/" element={<Dashboard />} />}
      {currentUserEmail && <Route path="/editor" element={<Editor />} />}
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
}
