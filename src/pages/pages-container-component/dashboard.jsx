import React, { Component } from "react";
import DashboardInfo from "../../components/dashboard-info-card/dashboard-info.component";
import MedecinesTable from "../../components/medecines-table/medecines-table.component";
import Breadcrumb from "./../../components/breadcrumb/breadcrumb.component";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb currentPageName="Dashboard" />
        <DashboardInfo />
        <MedecinesTable currentPage="dashboard" />
      </React.Fragment>
    );
  }
}

export default Dashboard;
