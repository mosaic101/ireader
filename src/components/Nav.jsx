
import React, { Component } from 'react'
import { NavBar, Icon, Drawer, List } from 'antd-mobile'
import './HKDrawer.css'
import Body from './Body'
class Nav extends Component {
  state = {
    docked: false,
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  }
  render() {
    const sidebar = (<List>
      {[...Array(6).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    const drawerProps = {
      docked: this.state.docked,
      open: false,
      position: 'left',
    };
    return (
      <div>
        <NavBar leftContent="settings" mode="light" 
        onLeftClick={() => this.onDock('docked')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >react</NavBar>
        <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={sidebar}
        {...drawerProps}
      >
         <Body className="hk-body">
        </Body>
        </Drawer>
      </div>
    )
  }
}

export default Nav
