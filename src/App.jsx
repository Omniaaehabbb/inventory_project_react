import { useRoutes} from "react-router-dom";
import "./App.css";
import FooterLayout from "./components/Footer";
import NavbarLayout from "./components/Navbar";
import { routes } from "./routes";
import "aos/dist/aos.css";

function App() {
  const element = useRoutes(routes);

  return (
    <>
      <NavbarLayout />
      {element}
      <FooterLayout />
    </>
  );
}

export default App;