import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

// import Home from "./home";
import About from "./about";
import Landing from "./landing";
import Account from "./account";
import Dashboard from "./dashboard";
import JurnalUmum from "./dashboard/jurnalumum";
import JurnalPenyesuaian from "./dashboard/jurnalpenyesuaian";
import BukuBesar from "./dashboard/bukubesar";
import Neraca from "./dashboard/neraca";
import LaporanKeuangan from "./dashboard/laporankeuangan";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    routes: [
      {
        path: "/dashboard/jurnalumum",
        component: JurnalUmum
      },
      {
        path: "/dashboard/jurnalpenyesuaian",
        component: JurnalPenyesuaian
      },
      {
        path: "/dashboard/bukubesar",
        component: BukuBesar
      },
      {
        path: "/dashboard/neraca",
        component: Neraca
      },
      {
        path: "/dashboard/laporankeuangan",
        component: LaporanKeuangan
      }
    ]
  },
  {path: "/about", component: About},
  {path: "/landing", component: Landing},
  {path: "/account", component: Account},
  {path: "/", component: Landing},
  {path: "/event", component: Event}
];

class App extends React.Component {
  // constructor() {
  //     super();
  // }
  render() {
      return(
        <main>
          <Router>
            <Navbar/>
              <div style={{minHeight: "31rem"}}>
                <Switch>
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
              </div>
            <Footer/>
          </Router>
        </main>
      );
  }
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;