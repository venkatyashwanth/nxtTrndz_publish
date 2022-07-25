import {Navigate} from 'react-router-dom';
import Cookies from "js-cookie";
import Header from "../Header";
import "./index.css";

const Products = () => {
  const accessToken = Cookies.get("jwt_token");

  if (accessToken === undefined) {
    return <Navigate to="/login"/>
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <img
          className="products-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </div>
    </>
  );
};

export default Products;
