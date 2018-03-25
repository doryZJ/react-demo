import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
// import Divider from 'antd';

class Dashboard extends Component {
  render () {
    return (
      <div className="dashboard">
        <Sidebar />
      </div>
    )
  }
}

export default Dashboard;
