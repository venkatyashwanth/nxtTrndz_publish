import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </Router>
);
export default App;
