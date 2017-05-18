
import React from 'react'
import { Flex, WhiteSpace, WingBlank } from 'antd-mobile'

const PlaceHolder = (props) => (
  <div style={{
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    height: '0.6rem',
    lineHeight: '0.6rem',
    width: '100%',
  }} {...props}
  >
  <img src="./test.png" />
  </div>
)

class FlexTest extends React.Component {
  render() {
    return (
      <div>
        <WhiteSpace size="xl" />
        <Flex style={{
          
        }}
        >
          <Flex.Item><PlaceHolder /></Flex.Item>
          <Flex.Item><PlaceHolder /></Flex.Item>
        </Flex>
      </div>
    )
  }
}

export default FlexTest