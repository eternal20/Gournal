import React, { Component } from "react";
import { withFirebase } from '../Firebase';
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
import Home from "./home";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount(){
    console.log(this.props.firebase)
    if(!this.props.firebase){return}
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({authUser})
        : this.setState({authUser: null})
    });
  }

  render(){
    return(
      <main>
        {/* {console.log(authState.authUser)} */}
        <Router>
          <Navbar authUser={this.state.authUser}/>
            <div style={{minHeight: "42vw"}}>
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

const RouteWithSubRoutes = route => {
  // console.log(route.subtitle);
  document.title = (!route.subtitle?"":route.subtitle+" - ")+"Gournal";
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
  {path: "/landing", component: Landing, subtitle: ""},
  {path: "/account", component: Account, subtitle: "Account"},
  {path: "/", component: Home, subtitle: ""},
  {path: "/event", component: Event, subtitle: ""}
];

export default withFirebase(App);