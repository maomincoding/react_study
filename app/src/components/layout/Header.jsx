import React from 'react';
import { Layout } from 'antd';

const HeaderArea = () => {
  const { Header } = Layout;
  return (
    <div>
      <Layout>
        <Header style={{color:'#fff',textAlign:'center'}}>Header</Header>
      </Layout>
    </div>
  )
};

export default HeaderArea;