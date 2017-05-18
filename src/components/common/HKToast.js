/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   HKToast.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jianjin.wu <mosaic101@foxmail.com>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/05/18 09:45:24 by jianjin.wu        #+#    #+#             */
/*   Updated: 2017/05/18 10:00:47 by jianjin.wu       ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import { Toast } from 'antd-mobile'

class HKToast {
  
  showToast() {
    Toast.info('这是一个 toast 提示!!!', 1)
  }

  showToastNoMask() {
    Toast.info('无 mask 的 toast !!!', 2, null, false)
  }

  successToast() {
    Toast.success('加载成功!!!', 1)
  }

  failToast() {
    Toast.fail('加载失败!!!', 1)
  }

  offline() {
    Toast.offline('网络连接失败!!!', 1)
  }

  loadingToast() {
    Toast.loading('加载中...', 1, () => {
      console.log('加载完成!!!')
    })
  }
}


export default new HKToast()
