/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NavPopover.jsx                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/05/18 15:46:27 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/05/18 17:53:34 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import React from 'react'
import { Popover, NavBar, Icon } from 'antd-mobile'

import scan from '../icons/scan.svg'
import qrcode from '../icons/qrcode.svg'
import help from '../icons/help.svg'
const Item = Popover.Item;

class HKPopover extends React.Component {
  state = {
    visible: true,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    let offsetX = -10; // just for pc demo
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      offsetX = -26;
    }
    return (<div>
      <NavBar iconName={false}
        mode="light"
        rightContent={
          <Popover mask
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" icon={<Icon type={scan} size="xs" />} data-seed="logId">扫一扫</Item>),
              (<Item key="5" value="special" icon={<Icon type={qrcode} size="xs" />} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
              (<Item key="6" value="button ct" icon={<Icon type={help} size="xs" />}>
                <span style={{ marginRight: 5 }}>帮助</span>
              </Item>),
            ]}
            popupAlign={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [offsetX, 15],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 0.3rem',
              marginRight: '-0.3rem',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
        NavBar
      </NavBar>
    </div>);
  }
}

export default HKPopover