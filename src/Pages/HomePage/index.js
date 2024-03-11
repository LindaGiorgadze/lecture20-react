import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import { Button } from "react-bootstrap";

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <h1>Home Page</h1>
      <Button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        Change Webpage Theme
      </Button>
    </div>
  );
};
export default HomePage;
