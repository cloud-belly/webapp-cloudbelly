import React from "react";
import { connect } from "react-redux";
import "./CartProduct.scss";
import CartProductItem from "./CartProductItem/CartProductItem";

export function Cart({ products }) {
  console.log(products);
  return (
    <div className="cartProducts">
      {products.map((product, id) => {
        return <CartProductItem key={id} product={product} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products
  };
};

// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps, null)(Cart);
