import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterArea = () => {
  return (
    <div>
      <Layout>
        <Footer style={{textAlign:'center'}}>Footer</Footer>
      </Layout>
    </div>
  )
}

export default FooterArea