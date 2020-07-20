import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withAlert } from "react-alert";

class Alerts extends React.Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  componentDidUpdate() {
    console.log("Alert props => ", this.props);
    // const { error, alert, message } = this.props;
    // console.log(" componentDidUpdate ", error, alert, message);
    // console.log("Test = ", message.msg);
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
