import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withAlert } from "react-alert";

class Alerts extends React.Component {
  componentDidUpdate() {
    console.log(this.props);
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.errors,
    message: state.messages,
  };
};

export default connect(mapStateToProps)(withAlert()(Alerts));
