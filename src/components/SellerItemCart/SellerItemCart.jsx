import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { FaHeart, FaCommentAlt } from "react-icons/fa";
import { connect } from "react-redux";
import "./style.scss";

const SellerItemCart = (props) => {
  const { item, handleAddToCart, handleToggleLike, handleComment } = props;
  const [ viewSimilar, setViewSimilar ] = useState(false);

  const handleToggleSimilar = () => {
    setViewSimilar(!viewSimilar);
  };
  return (
    <div className="card">
      <div className="card-head">
        <img src={item.seller.logo} alt="Logo" />
        <div className="info-wrapper">
          <strong>{item.seller.name}</strong>
          <br />
          <span>{item.description}</span>
        </div>
        <span className="cart-button">
          <BiCart onClick={handleAddToCart} />
        </span>
      </div>
      <div className="card-body">
        <img className="meal-image" src={item.picture} alt="Meal" onClick={handleToggleSimilar} />
        <div className="activity-info">
          <span className="like-container">
            <FaHeart onClick={handleToggleLike} />
            <span>{item.likesNumber}</span>
          </span>
          <span className="comment-icon-container">
            <FaCommentAlt onClick={handleComment} />
            <span>{item.commentsNumber}</span>
          </span>
        </div>
      </div>
      {viewSimilar && (
        <div className="similar-items">
          {item.similarItems.map((sim) => (
            <div className="item-similar" key={sim.id}>
              <span className="item-similar-price pull-right">{sim.price} Rs</span>
              <span className="item-similar-name">{sim.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (id) => (evt) => {
      dispatch(addItemToCart(id));
    },
    handleToggleLike: (id) => () => {
      dispatch(toggleLikeItem(id));
    },
    handleComment: () => {
      dispatch(commentItem(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(SellerItemCart);
