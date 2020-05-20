import React from 'react'
import { Layout } from 'antd';

const { Header } = Layout;

const HeaderArea = () => {
  return (
    <div>
      <Layout>
        <Header style={{color:'#fff',textAlign:'center'}}>Header</Header>
      </Layout>
    </div>
  )
}

export default HeaderArea