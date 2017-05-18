/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NavDrawer.jsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/05/18 15:46:09 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/05/18 17:59:21 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { Drawer, List } from 'antd-mobile'
import TileList from '../book/TileList'

class NavDrawer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      open: false,
      position: 'left'
    }
  }

  onOpenChange(...args) {
    console.log(args)
    this.setState({ open: !this.state.open })
  }
  render() {
    const sidebar = (<List>
      {[...Array(6).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>)
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>)
      })}
    </List>)

    const drawerProps = {
      docked: this.state.docked,
      open: false,
      position: 'left',
    }
    return (
      <div>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight - 200 }}
          dragHandleStyle={{ display: 'none' }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebarStyle={{ border: '1px solid #ddd' }}
          sidebar={sidebar}
          {...drawerProps}
        >
          <TileList />
        </Drawer>
      </div>
    )
  }
}

export default NavDrawer
