import React from "react";
import withAuthentication from '../Session/withAuthentication';
import {AuthUserContext} from '../Session';
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
import Admin from "./admin";
import Landing from "./landing";
import Account from "./account";
import SignInPage from "./signin";
import RegisterPage from "./register";
import Dashboard from "./dashboard";
import JurnalUmum from "./dashboard/jurnalumum";
import JurnalPenyesuaian from "./dashboard/jurnalpenyesuaian";
import BukuBesar from "./dashboard/bukubesar";
import Neraca from "./dashboard/neraca";
import LaporanKeuangan from "./dashboard/laporankeuangan";
import Navbar from "../components/Navbar";
import NavbarSide from "../components/NavbarSide";
import Footer from "../components/Footer";
// import Home from "./home";

const App = props => {

  const RouteWithSubRoutes = route => {
    // console.log(route.subtitle);
    document.title = (!route.subtitle?"":route.subtitle+" - ")+"Gournal";
    return (
      <>
        <AuthUserContext.Consumer>
          { authState => ( authState.authUser
          ?(
            <>
              <Navbar pageName={route.subtitle}/>
              <div className="row container mx-auto mt-3 px-0"  style={{minHeight: "100vh"}}>
                <div className="col-3 d-none d-lg-block">
                  <NavbarSide/>
                </div>
                <div className="col-lg-9">
                  <Route
                    path={route.path}
                    render={props => (
                      // pass the sub-routes down to keep nesting
                      <route.component {...props} routes={route.routes} />
                    )}
                  />
                </div>
              </div>
            </>
          )
          :(
            <div  style={{minHeight: "100vh"}}>
              <Route
                path={route.path}
                render={props => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes} />
                )}
              />
            </div>
          ))}
        </AuthUserContext.Consumer>
        <Footer/>
      </>
    );
  }
  // console.log("authUser: ", authUser)
  return(
    <main>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
      </Router>
    </main>
  );
}

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    subtitle: "Dashboard",
    routes: [
      {
        path: "/dashboard/jurnalumum",
        component: JurnalUmum,
        subtitle: "ini jurnal umum"
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
  {path: "/about", component: About, subtitle: "About"},
  {path: "/admin", component: Admin, subtitle: "Admin"},
  {path: "/account", component: Account, subtitle: "Account"},
  {path: "/signin", component: SignInPage, subtitle: "Sign In"},
  {path: "/register", component: RegisterPage, subtitle: "Register"},
  {path: "/", component: Landing, subtitle: "Landing"},
];

export default withAuthentication(App);