import "./right-content.scss";

import { Switch, Route } from "react-router-dom";

import ChangePassword from "./TabSection02/ChangePassword";
import { TabSection01 } from "./TabSection01";
import { TabSection02 } from "./TabSection02";
import { TabSection03 } from "./TabSection03";

export default function RightContent() {
  return (
    <div className="inner-content">
      <Switch>
        <Route exact path="/update/privacy/change-password"><ChangePassword /></Route>
        <Route exact path="/update/general"><TabSection01 /></Route>
        <Route exact path="/update/privacy"><TabSection02 /></Route>
        <Route exact path="/update/profile"><TabSection03 /></Route>
      </Switch>
    </div>
  );
}
