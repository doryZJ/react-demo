import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
import auth from '../../actions/auth';
import './Login.scss';
const FormItem = Form.Item;

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values
        this.props.login({
          email: `${username}@pansheng.com`,
          password
        })
        console.log('value', values)
      }
    })
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-view">
        <div className="left">
          <img src="/images/bg.png" alt="首页" />
        </div>
        <div className="right">
        <img className="logo" src="/images/ps-logo.png" alt="logo" />
            <div className="label">登录</div>
            <div className="login-form">
              <Form onSubmit={this.handleSubmit}>
                <FormItem>
                  {getFieldDecorator('username', {
                    rules: [{required: true, message: '请输入用户名！'}]
                  })(<Input size="large" prefix={<Icon type="user" style={{color: 'rgba(0, 0, 0, .25)'}}/>} placeholder="用户名" />)
                  }
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{required: true, message: '请输入密码！'}]
                  })(<Input size="large" prefix={<Icon type="lock" style={{color: 'rgba(0, 0, 0, .25)'}}/>} type="password" placeholder="密码" />)
                  }
                </FormItem>
                <FormItem>
                  <Button size="large" type="primary" className="login-form-button" htmlType="submit">登录</Button>
                </FormItem>
              </Form>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loginStatus: state.auth.loginStatus
})

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(auth.login(username, password))
})
const wrappedLoginForm = Form.create()(Login);

export default connect(mapStateToProps, mapDispatchToProps)(wrappedLoginForm);
