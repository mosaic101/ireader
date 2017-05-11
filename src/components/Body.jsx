
import React, { Component } from 'react'
import { Grid, WhiteSpace, WingBlank } from 'antd-mobile'

const data = Array.from(new Array(18)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
  text: `name${i}`
}))

const renderItem = (dataItem, index) => (
  <div style={{ margin: '0.16rem', background: '#f7f7f7', textAlign: 'center' }}>
    <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '0.08rem' }}>
      <span>{index + 1}.{dataItem.text}</span>
    </div>
    <img src={dataItem.icon} style={{ width: '80%', margin: '0.12rem' }} />
  </div>
)

class Body extends Component {
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Grid data={data} columnNum={3} hasLine={false}
            renderItem={renderItem}
            onClick={() => console.log('grid')}
          />
        </WingBlank>


      </div>
    )
  }
}

export default Body

