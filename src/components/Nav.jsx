
import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

class Nav extends Component {
  render() {
    return (
      <div>
        <NavBar leftContent="后退" mode="light" onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >看书神器</NavBar>
        <Icon type={require('./loading.svg')} size="md"/>
        
      </div>
    )
  }
}

export default Nav


