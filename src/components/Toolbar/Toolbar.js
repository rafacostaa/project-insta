import React from "react";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div className="container-toolbar">
      <div className="align">
        <div className="toolbar-div1 align">
          <img src="assets/logo.png" alt="logo-brand" />
        </div>
        <div className="toolbar-div2 align">
          <img src="assets/phone.png" alt="logo-phone" />
          <span>(11)3569-3465</span>
        </div>
      </div>
      <div class="toolbar-div3">
        <div className="container-user">
          <img src="assets/user.png" alt="logo-user" />
          <span>User Test</span>
        </div>
        <img src="assets/caret.png" alt="logo-caret" />
      </div>
    </div>
  );
};

export default Toolbar;
