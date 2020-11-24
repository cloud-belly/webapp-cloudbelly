import React from "react";
import { BiCart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FcComments } from "react-icons/fc";
import { connect } from "react-redux";
import "./style.scss";

const SellerItemCart = (props) => {
  const { sellerInfo, handleAddToCart, likeNumber, commentNumber, handleToggleLike, handleComment } = props;

  return (
    <div>
      <div className="card-head">
        <img src="" alt="SellerIcon" />
        <BiCart onClick={handleAddToCart} />
      </div>
      <div className="card-body">
        <img className="meal-image" src="" alt="Meal" />
        <div className="activity-info">
          <span className="like-container">
            <FaHeart onClick={handleToggleLike} />
            <span>{likeNumber}</span>
          </span>
          <span className="comment-icon-container">
            <FcComments onClick={handleComment} />
            <span>{commentNumber}</span>
          </span>
        </div>
      </div>
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
