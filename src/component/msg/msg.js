import React from 'react'
import { connect } from 'react-redux'

@connect(
    state => state
)
class Msg extends React.Component {

    render() {
        console.log(this.props);
        const msgGroup = {}

        this.props.chat.chatmsg.forEach(v => {
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        })
        console.log(msgGroup)
        return (
            <h2>Msg</h2>
        )
    }
}

export default Msg