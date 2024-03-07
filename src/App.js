// import { ReactComponent as Logo } from "./logo.svg";
import "./App.scss";
import AuthRoutes from "./components/Routes/AuthRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";

function App() {
  const isAuthorized = true;
  return (
    <div className="App container">
      {isAuthorized ? <PublicRoutes /> : <AuthRoutes />}
    </div>
  );
}

export default App;
