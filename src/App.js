import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCatalog from "./ProductCatalog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCatalog />} />
      </Routes>
    </Router>
  );
}

export default App;
