import React from 'react'
import { connect } from 'react-redux'
import { List } from 'antd-mobile'

@connect(
    state => state
)
class Msg extends React.Component {
    getLast(arr) {
        return arr[arr.length - 1]
    }
    render() {
        const Item = List.Item
        const Brief = Item.Brief
        const userid = this.props.user._id
        const userinfo = this.props.chat.users
        const msgGroup = {}
        this.props.chat.chatmsg.forEach(v => {
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        })
        const chatList = Object.values(msgGroup)
        console.log({ chatList })
        return (
            <div>
                {chatList.map(v => {
                    console.log({ v })
                    const lastItem = this.getLast(v)
                    const targetid = v[0].from == userid ? v[0].to : v[0].from
                    if (!userinfo[targetid]) {
                        return null
                    }
                    return (
                        <List
                            key={lastItem._id}
                        >
                            <Item
                                thumb={require(`../img/${userinfo[targetid].avatar}.png`)}
                            >
                                {lastItem.content}
                                <Brief>{userinfo[targetid].name}</Brief>
                            </Item>
                        </List>)
                })}
            </div>
        )
    }
}

export default Msg