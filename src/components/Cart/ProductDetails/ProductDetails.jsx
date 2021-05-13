import { connect } from "react-redux";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { getCartItemById } from "../../../store/selectors";
import { BiStar, BiPlusCircle, BiMinusCircle, BiChevronLeft, BiChevronRight, BiTrash } from "react-icons/bi";
import "./styles.scss";

function ProductDetails({ product }) {
  const [ editHour, setEditHour ] = useState(false);
  const [ editMinute, setEditMinute ] = useState(false);
  const [ currentMeridium, setCurrentMeridium ] = useState("AM");
  const [ currentHour, setCurrentHour ] = useState("11");
  const [ currentMinute, setCurrentMinute ] = useState("00");
  const handleUpdateMinute = (direction = "up") => () => {
    if (direction === "down") {
      if (parseFloat(currentMinute) === 0) {
        let hour = parseFloat(currentHour) - 1;
        if (hour < 0) {
          setCurrentMeridium(currentMeridium === "AM" ? "PM" : "AM");
        }
        hour = hour <= 0 ? (currentMeridium === "AM" ? 12 : 11) : hour;
        setCurrentHour(`${hour < 10 ? 0 : ""}${hour}`);
        setCurrentMinute(45);
        return;
      }
      const min = parseFloat(currentMinute) - 15;
      setCurrentMinute(`${min < 15 ? "00" : min}`);
      return;
    }
    // The direction is up
    if (parseFloat(currentMinute) === 45) {
      let hour = parseFloat(currentHour) + 1;
      if (hour > 12) {
        setCurrentMeridium(currentMeridium === "AM" ? "PM" : "AM");
      }
      hour = hour > 12 ? 1 : hour;
      setCurrentHour(`${hour < 10 ? 0 : ""}${hour}`);
      setCurrentMinute("00");
      return;
    }
    const min = parseFloat(currentMinute) + 15;
    setCurrentMinute(`${min}`);
    return;
  };

  return (
    <div className="container">
      <BiTrash className="pull-right action" />
      <h3 className="describe">DESCRIPTION</h3>
      <img alt="ITEM IMAGE" src={product.url} className="product-image" />
      <div className="title-price">
        <span className="title">{product.label}</span>
        <span className="pull-right">{product.price} Rs</span>
      </div>
      <div className="item-description">{product.description}</div>
      <div className="item-ratings">
        <span className="title">User ratings</span>
        <span className="stars pull-right">
          {Array(5)
            .fill("")
            .map((item, i) => (
              <BiStar key={i} className={i < product.rating ? "ok" : "ko"} />
            ))}
        </span>
      </div>
      <div className="item-calories-indicator">
        <div className="info">
          <span className="value"></span>
          <br />
          <span className="index">Calories</span>
        </div>
        <div className="info">
          <span className="value"></span>
          <br />
          <span className="index">Protein</span>
        </div>
        <div className="info">
          <span className="value"></span>
          <br />
          <span className="index">Carbs</span>
        </div>
        <div className="info">
          <span className="value"></span>
          <br />
          <span className="index">Fats</span>
        </div>
      </div>
      <div className="item-number">
        <span className="title">Serving</span>
        <span className="number-action pull-right">
          <BiMinusCircle className="action" />
          <span className="number">{product.number}</span>
          <BiPlusCircle className="action" />
        </span>
      </div>
      <div className="booking">
        <span className="title">Pre-order</span>
        <span className="hour pull-right">
          <BiChevronLeft className="action" onClick={handleUpdateMinute("down")} />
          <span className="value">
            <span>{editHour ? <input type="text" value={currentHour} /> : currentHour}</span> :
            <span> {editMinute ? <input type="text" value={currentMinute} /> : currentMinute}</span>
            <span> {currentMeridium}</span>
          </span>
          <BiChevronRight className="action" onClick={handleUpdateMinute("up")} />
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = (state, { match }) => {
  return {
    product: getCartItemById()(state, match?.params?.id)
  };
};

export default withRouter(connect(mapStateToProps, null)(ProductDetails));
