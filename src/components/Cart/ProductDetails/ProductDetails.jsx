import { connect } from "react-redux";
import { useParams, withRouter } from "react-router-dom";
import { getCartItemById } from "../../../store/selectors";
import "./styles.scss";

function ProductDetails({ product }) {
  console.log("product >>>> ", product);
  const { id } = useParams();

  return <div>Details</div>;
}

const mapStateToProps = (state, { match }) => {
  return {
    product: getCartItemById()(state, match?.params?.id)
  };
};

export default withRouter(connect(mapStateToProps, null)(ProductDetails));
