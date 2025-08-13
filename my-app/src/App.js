import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Layout from "./components/layout";
import Solutions from "./pages/solutions";
import Product from './pages/product';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/product" element={<Product/>}/>
          <Route path="/solutions" element={<Solutions/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
