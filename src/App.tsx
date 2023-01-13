import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import AppRoute from "./router/AppRoute";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
      <AppRoute />
    </div>
  );
}

export default App;
