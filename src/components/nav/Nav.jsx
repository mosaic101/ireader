/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Nav.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/05/18 14:34:43 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/05/18 18:09:13 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react'
import { NavBar, Icon, Drawer, List } from 'antd-mobile'

import './nav.css'
import NavDrawer from './NavDrawer'

import category from '../../assets/icons/category.svg'
import search from '../../assets/icons/search.svg'
import ellipsis from '../../assets/icons/ellipsis.svg'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  
  showList() {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          iconName={false}
          leftContent={
            <Icon type={category} />
          }
          onLeftClick={this.showList}
          rightContent={[
            <Icon key="0" type={search} style={{ marginRight: '0.32rem' }} />,
            <Icon key="1" type={ellipsis} />
          ]}
        >react</NavBar>
        <NavDrawer docked={this.state.open} />
      </div>
    )
  }
}

export default Nav
