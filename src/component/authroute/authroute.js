import React from 'react'
import axios from 'axios'

class AuthRoute extends React.Component {
    componentDidMount() {
        //获取用户信息
        axios.get('user/info')
            .then(res => {
                if (res.status == 200) {
                    console.log(res.data)
                }
            })
    }
    render(){
        return <h1>test</h1>
    }
}
export default AuthRoute