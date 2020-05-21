import React from 'react';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import { Spin } from 'antd';

const loadingComponent =()=>{
    return (
        <Loading>
             <Spin />   
        </Loading>
    )
};

export default (loader,loading = loadingComponent)=>{
    return Loadable({
        loader,
        loading
    });
};

const Loading = styled.div`
    text-align: center;
    margin:50vh 0;
`;