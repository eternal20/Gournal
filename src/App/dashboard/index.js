import React from "react";
import DashboardItem from '../../components/DashboardItem';
import Tools from '../../components/Tools';
// import Profile from '../../components/Profile';
import {withAuthorization} from '../../Session';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.

const Dashboard = ({routes},{route}) => {

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="overflow-auto sticky-top bg-white" style={{top: "3.5rem"}}>
          <div data-toggle="a" className="dashboard-item">
          <DashboardItem dashboardURL="/dashboard/jurnalumum" dashboardTitle="Jurnal Umum"/>
          <DashboardItem dashboardURL="/dashboard/jurnalpenyesuaian" dashboardTitle="Jurnal Penyesuaian"/>
          <DashboardItem dashboardURL="/dashboard/bukubesar" dashboardTitle="Buku Besar"/>
          <DashboardItem dashboardURL="/dashboard/neraca" dashboardTitle="Neraca"/>
          <DashboardItem dashboardURL="/dashboard/laporankeuangan" dashboardTitle="Laporan Keuangan"/>
          </div>
        </div>
        <DefaultDashboard />
        <div className="px-1">
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </div>
      <div className="col-md-4">
        <Tools/>
      </div>
    </div>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
const RouteWithSubRoutes = (route) => {

  return (
    <>
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    </>
  );
}

const DefaultDashboard = () => {
  if(window.location.pathname === "/dashboard"){
    return (
      <h5 className="p-3 bg-light rounded-lg shadow-sm">Pilih tab di atas untuk menampilkan tabel</h5>
    )
  }else{
    return ''
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dashboard);