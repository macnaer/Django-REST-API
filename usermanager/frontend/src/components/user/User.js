import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUsers, deleteUser } from "../../actions/users";

class Users extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users, deleteUser } = this.props;
    return (
      <Fragment>
        <div className="outer-container">
          <h1>User Manager Table</h1>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="priority-200" key={user.id}>
                  <td className="name">{user.id}</td>
                  <td className="clicks">{user.name}</td>
                  <td className="priority">{user.email}</td>
                  <td className="impressions">{user.message}</td>
                  <td className="delete">
                    <button
                      className="delete-btn"
                      onClick={deleteUser.bind(this, user.id)}
                    >
                      <i className="fas fa-trash-alt" title="delete row"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("Main state: ", state);
  return {
    users: state.users.users,
  };
};
export default connect(mapStateToProps, { getUsers, deleteUser })(Users);
