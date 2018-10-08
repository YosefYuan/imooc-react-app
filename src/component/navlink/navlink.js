import React from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class NavLinkBar extends React.Component{
    static propTypes = {
        data: PropTypes.array.isRequired
    }
    render(){
        const navList = this.props.data.filter(v => !v.hide)
        const pathname = this.props.location.pathname
        return (
            <TabBar>
               {navList.map(v => (
                   <TabBar.Item
                        key={v.path}
                        onPress = {() => {
                            this.props.history.push(v.path)
                        }}
                        title={v.text}
                        selected={pathname === v.path}
                        icon={{uri: require(`./img/${v.icon}.png`)}}
                        selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
                   ></TabBar.Item>
               ))}
            </TabBar>
        )
    }
}

export default NavLinkBar