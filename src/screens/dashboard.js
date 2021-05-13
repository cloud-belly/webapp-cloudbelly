import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Layout } from "../components/Layout";
import { SellerItemCart } from "../components/SellerItemCart";
import { loadData, loadMoreData } from "../store/actions/dashboard";

function Dashboard({ data, loading, loadingMore, load, loadMore }) {
  useEffect(() => {
    load();
  }, []);

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div id="dashboard-container">
          {loadingMore && <div>spin</div>}
          {data.map((item, i) => (
            <SellerItemCart key={`db-${i}`} item={item} />
          ))}
        </div>
      )}
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.dashboard.data,
    loading: state.dashboard.request.loading,
    loadingMore: state.dashboard.request.loadingMore
  };
};

const mapDispatchToProps = (dispatch) => ({
  load: (dispatch) => () => dispatch(loadData()),
  loadMore: (dispatch) => () => dispatch(loadMoreData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
