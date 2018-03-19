import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './Login.scss';
const FormItem = Form.Item;

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleSubmit(e) {

  };
  render() {
    return (
      <div className="login-view">
        <div className="left">
          <img src="/images/bg.png" alt="首页" />
        </div>
        <div className="right">
        <img className="logo" src="/images/ps-logo.png" alt="logo" />
            <div className="label">登录</div>
            <div className="login-form">
              {/* <Form onSubmit={this.handleLogin} className="login-form">
                <FormItem>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                  })(<Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                  })(<Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />)}
                </FormItem>
                <FormItem>
                  <Button size="large" type="primary" loading={this.props.loginStatus === 1} htmlType="submit" className="login-form-button">登录</Button>
                </FormItem>
              </Form> */}
              <Form onSubmit={this.handleSubmit}>
                <FormItem>
                  <Input size="large" prefix={<Icon type="user" style={{color: 'rgba(0, 0, 0, .25)'}}/>} placeholder="用户名" />
                </FormItem>
                <FormItem>
                  <Input size="large" prefix={<Icon type="lock" style={{color: 'rgba(0, 0, 0, .25)'}}/>} type="password" placeholder="密码" />
                </FormItem>
                <FormItem>
                  <Button size="large" type="primary" className="login-form-button">登录</Button>
                </FormItem>
              </Form>
            </div>
        </div>
      </div>
    )
  }
}

export default Login
