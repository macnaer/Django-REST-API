import React from "react";
import { withAlert } from "react-alert";

const App = ({ alert }) => (
  <button
    onClick={() => {
      alert.show("Oh look, an alert!");
    }}
  >
    Show Alert
  </button>
);

export default withAlert()(App);
