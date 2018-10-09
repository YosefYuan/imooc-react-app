import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card, WhiteSpace, WingBlank } from "antd-mobile";

@connect(
  state => state.chatuser,
)
class UserCard extends React.Component {
  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <WingBlank>
        <WhiteSpace />
        {this.props.userList.map(
          v =>
            v.avatar ? (
              <Card key={v._id}>
                <Header
                  title={v.user}
                  thumb={require(`../img/${v.avatar}.png`)}
                  extra={<span>{v.title}</span>}
                />
                <Body>
                  {v.type == "boss" ? (
                    <div>
                      公司：
                      {v.company}
                    </div>
                  ) : null}
                  {v.desc.split("\n").map(d => (
                    <div key={d}>{d}</div>
                  ))}
                  {v.type == "boss" ? (
                    <div>
                      薪资：
                      {v.money}
                    </div>
                  ) : null}
                </Body>
              </Card>
            ) : null
        )}
      </WingBlank>
    );
  }
}

export default UserCard;
