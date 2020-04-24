import React from "react";
import HeaderNav from "./components/layout/HeaderNav";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/DashBoard";
import Providers from "./components/providers/Providers";

function App() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Container fluid>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/providers" component={Providers}></Route>
        </Switch>
      </Container>
    </div>
  );
}

document.body.classList.add("theme-dark");
document.body.classList.add("overflow-auto");

export default App;
