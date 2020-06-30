import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Sales from "./pages-container-component/sales";
import AllMedecines from "./pages-container-component/all-medecines";
import AddMedecine from "./pages-container-component/add-medecine";
import Dashboard from "./pages-container-component/dashboard";
import Footer from "../components/footer/footer.component";
import Sidebar from "./../components/pages-container-sidebar/sidebar.component";
import Checkout from "./pages-container-component/checkout";
import AllMedecineType from "./pages-container-component/all-medecine-type";
import AddMedecineType from "./pages-container-component/add-medecine-type";
import ContainerHeader from "./../components/pages-container-header/header.component";
import FreezeMedecine from "./pages-container-component/freeze-medecine";
import SalesHistory from "./pages-container-component/sales-history";
import { selectSidebar } from "./../redux/header/header.selector";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../stylesheets/animate.css";
import "../stylesheets/bootstrap.css";
import "../stylesheets/common-styles.css";
import "../stylesheets/components.css";
import "../stylesheets/layout.css";
import "../stylesheets/pages.css";
import "../stylesheets/plugins.css";
import "../stylesheets/responsive.css";
import "../stylesheets/waves.css";

const PagesContainer = ({ sidebar_hidden, match }) => {
  return (
    <div
      className={`page-container ${
        sidebar_hidden ? "list-menu-view" : "hide-list-menu"
      }`}
    >
      <div className="left-aside desktop-view">
        <Sidebar />
      </div>
      <div className="page-content">
        <ContainerHeader />
        <div className="main-container">
          <div className="container-fluid">
            <ToastContainer />
            <Route exact path={`${match.path}`} component={Dashboard} />
            <Route
              path={`${match.path}/all-medecines`}
              component={AllMedecines}
            />
            <Route
              path={`${match.path}/add-medecine/:id`}
              component={AddMedecine}
            />
            <Route
              path={`${match.path}/all-medecine-type`}
              component={AllMedecineType}
            />
            <Route
              path={`${match.path}/add-medecine-type/:id`}
              component={AddMedecineType}
            />
            <Route path={`${match.path}/sales`} component={Sales} />
            <Route path={`${match.path}/checkout`} component={Checkout} />
            <Route
              path={`${match.path}/freeze-medecine`}
              component={FreezeMedecine}
            />
            <Route
              path={`${match.path}/sales-history`}
              component={SalesHistory}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sidebar_hidden: selectSidebar,
});

export default connect(mapStateToProps)(PagesContainer);
