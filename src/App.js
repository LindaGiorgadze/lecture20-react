import { useState } from "react";
import "./App.scss";
import ThemeContext from "./Contexts/ThemeContext";
import AuthRoutes from "./components/Routes/AuthRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import AuthContext from "./Contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
          "ChangeTheme": "Change Webpage Theme",
          "ChangeLanguage": "Change Language"
        }
      },
      ka: {
        translation: {
          "Welcome to React": "კეთილი იყოს თქვენი მობრძანება",
          "ChangeTheme": "ვებგვერდის თემის შეცვლა",
          "ChangeLanguage": "ენის შეცვლა"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

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
