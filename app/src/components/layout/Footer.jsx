import React from 'react';
import { Layout } from 'antd';

const FooterArea = () => {
  const { Footer } = Layout;
  return (
    <div>
      <Layout>
        <Footer style={{textAlign:'center'}}>Footer</Footer>
      </Layout>
    </div>
  )
};

export default FooterArea;