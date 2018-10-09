import React from "react";
import Logo from "../../component/logo/logo";
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/user.redux";
import imoocForm from "../../component/imooc-form/imooc-form";

// function hello() {
//   console.log("i love react");
// }

// function WrapperHello(fn) {
//   return function() {
//     console.log("before say hello");
//     fn();
//     console.log("after say hello");
//   };
// }

// hello = WrapperHello(hello)
// hello()

// const testAttr = {
//   a: 1,
//   b: 3
// };
// 1.属性代理 2.反向继承
// function WrapperHello(Comp) {
//   class WrapComp extends Comp {
//     componentDidMount() {
//       console.log("new add");
//     }
//     render() {
//       return <Comp />;
//     }
//   }
//   class WrapComp extends React.Component {
//     render() {
//       return (
//         <div>
//           <p>这是Hoc高阶组建特有的元素</p>
//           <Comp {...testAttr} name='text' />
//         </div>
//       );
//     }
//   }
//   return WrapComp;
// }

// @WrapperHello
// class Hello extends React.Component {
//   constructor(props) {
//     console.log(props);
//     super(props);
//     console.log(this.props);
//   }
//   render() {
//     return <h2>hello i love react</h2>;
//   }
// }

// Hello = WrapperHello(Hello);

@connect(
  state => state.user,
  { login }
)
@imoocForm
class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: "",
    //   pwd: ""
    // };
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.props.login(this.props.state);
    console.log("props", this.props);
  }
  register() {
    console.log("props", this.props);
    this.props.history.push("/register");
  }
  render() {
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo != "/login" ? (
          <Redirect to={this.props.redirectTo} />
        ) : null}
        {/* <Hello /> */}
        <Logo />
        <WingBlank>
          {this.props.msg ? (
            <p className="error-msg">{this.props.msg}</p>
          ) : null}
          <List>
            <InputItem
              onChange={v => {
                this.props.handleChange("user", v);
              }}
            >
              用户
            </InputItem>
            <InputItem
              onChange={v => {
                this.props.handleChange("pwd", v);
              }}
              type="password"
            >
              密码
            </InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type="primary">
            登录
          </Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
