import { useState } from "react";
import "./App.scss";
import ThemeContext from "./Contexts/ThemeContext";
import AuthRoutes from "./components/Routes/AuthRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import AuthContext from "./Contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 50000,
        refetchInterval: 50000,
        refetchOnWindowFocus: false,
        retryOnMount: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AuthContext.Provider value={{ user, setUser }}>
          <div className={`App container  ${theme} `}>
            {user ? <PublicRoutes /> : <AuthRoutes />}
          </div>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
