/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   HKDrawer.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/05/18 10:07:57 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/05/18 10:22:33 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { Component } from 'react'
import { Drawer, List, NavBar } from 'antd-mobile';

class HKDrawer extends Component {
  state = {
    open: false,
    position: 'left',
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {
    const sidebar = (<List>
      {[...Array(20).keys()].map((i, index) => {
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
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (
    <div>
      <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>Basic</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        {...drawerProps}
      >
        Click upper-left corner icon
      </Drawer>
    </div>
    );
  }
}

export default HKDrawer
