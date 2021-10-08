import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, ComponentsProps, LabScreen, Admin } from "./router";

export default function AppRoute() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/components" component={ComponentsProps} />
          <Route path="/lab/:id" component={LabScreen} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}
