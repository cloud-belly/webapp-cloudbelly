import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import ProductItem from "./ProductItem/ProductItem";

export function Cart({ products }) {
  return (
    <div className="cartProducts">
      {products.map((product, id) => {
        return <ProductItem key={id} product={product} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products
  };
};

export default connect(mapStateToProps, null)(Cart);
