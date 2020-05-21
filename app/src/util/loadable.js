import React from 'react';
import Loadable from 'react-loadable';
import styled from 'styled-components'
import { Spin } from 'antd';

//通用的过场组件
const loadingComponent =()=>{
    return (
        <Loading>
             <Spin />   
        </Loading>
    )
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader,loading = loadingComponent)=>{
    return Loadable({
        loader,
        loading
    });
}

const Loading = styled.div`
    text-align: center;
    margin:50vh 0;
`