import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

import { IncrementItem, DecrementItem, DropItem } from "../../../store/actions/cart";
import { useHistory } from "react-router-dom";
export function ProductItem({ product, handleItemSize, handleDeleteItem }) {
  const history = useHistory();
  const handleViewDetails = () => {
    history.push(`cart/item/${product.id}`);
  };
  return (
    <div className="cartProduct">
      <div className="cartProduct__leftView">
        <p className="cartProduct__name">{product.name}</p>
        <p className="cartProduct__price">Rs {product.price}</p>
        <div className="cartProduct__buttons">
          <span>
            <BiUpArrow onClick={handleItemSize(product.id, "INCREASE")} />
          </span>
          {product.number}
          <span>
            <BiDownArrow onClick={handleItemSize(product.id, "DECREASE")} />
          </span>
          <span>
            <MdDeleteForever onClick={handleDeleteItem(product.id)} />
          </span>
        </div>
      </div>
      <div className="cartProduct__rightView" onClick={handleViewDetails}>
        <img src="https://images-na.ssl-images-amazon.com/images/I/816fOeamMBL._AC_SX522_.jpg" alt="imag" />
      </div>
    </div>
  );
}

const mapDispatchProps = (dispatch) => {
  return {
    handleDeleteItem: (id) => () => {
      dispatch(DropItem(id));
    },
    handleItemSize: (id, action) => () => {
      if (action === "INCREASE") {
        dispatch(IncrementItem(id));
      } else {
        dispatch(DecrementItem(id));
      }
    }
  };
};

export default connect(null, mapDispatchProps)(ProductItem);
