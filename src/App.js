import { useState } from "react";
import "./App.scss";
import ThemeContext from "./Contexts/ThemeContext";
import AuthRoutes from "./components/Routes/AuthRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import AuthContext from "./Contexts/AuthContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <div className={`App container  ${theme} `}>
          {user ? <PublicRoutes /> : <AuthRoutes />}
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
