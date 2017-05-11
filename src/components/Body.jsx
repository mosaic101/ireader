
import React, { Component } from 'react'
import { Grid, WhiteSpace, WingBlank } from 'antd-mobile'
import test from '../../test.png'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: test,
  text: `name${i}`
}))

const renderItem = (dataItem, index) => (
  <div style={{ margin: '0.16rem', background: '#f7f7f7', textAlign: 'center' }}>
    
    <img src={dataItem.icon} style={{ width: '80%',height: '200', margin: '0.12rem' }} />
    <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '0.08rem' }}>
      <span>{index + 1}.{dataItem.text}</span>
    </div>
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
            style={{ background: '#f5f5f9' }}
            onClick={() => console.log('grid')}
          />
        </WingBlank>


      </div>
    )
  }
}

export default Body

