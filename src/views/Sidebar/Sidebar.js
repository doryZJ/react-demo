import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import changeMenu from '../../actions/menu';

class Sidebar extends Component {
  state = {
    current: 'mail',
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.selectedMenu
    })
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
    this.props.changeMenu(e.key)
  }
  render() {
    return (
      <div className="sidebar-view">
        {/* <Row className="logo">
          <Col span={18}>
            <Col span={10}>
              <Avatar size="large"
                src=""
                style={{
                  width: 50, height: 50, borderRadius: '50%', marginLeft: 20,
                }}
              />
            </Col>
            <Col span={14}>
            </Col>
          </Col>
          <Col span={6}></Col>
        </Row> */}
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="mail">
              <Icon type="mail"/>邮件管理
          </Menu.Item>
          <Menu.Item key="app">
              <Icon type="appstore"/>办公管理
          </Menu.Item>
          <Menu.Item key="file">
              <Icon type="mail"/>文档管理
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedMenu: state.menu.selectedMenu,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeMenu: (menu) => {
      dispatch(changeMenu(menu))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
