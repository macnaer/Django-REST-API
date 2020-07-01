import React, { Fragment } from "react";

//Component
import UserItem from "./userItem/userItem";

const UsersList = () => {
  return (
    <Fragment>
      <div className="outer-container">
        <h1>User Manager Table</h1>
        <UserItem />
      </div>
    </Fragment>
  );
};
export default UsersList;
