import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Product from './pages/product';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/product">Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </Router>
  );
}

export default App;
