import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { actionsCreator } from './store/'
import { Link } from 'react-router-dom'
import {Border,TxtTwo } from './styleJs/style'

import { Button } from 'antd';

const mapStateToProps = (state) =>{
  return {
    title:state.get('about').get('title')
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    changeTxt(){
      dispatch(actionsCreator.txt());
    }
  }
}

const About = (props) =>{
  const {title,changeTxt} = props;

  useEffect(()=>{
    document.title = 'About页'
    console.log(props.match.params);
  },[props.match.params])
  return (
    <div>
      <Border>
         <p>{title}</p>
         <Button><Link to="/">home</Link></Button>
      </Border>
      <Border>
         <Button onClick={changeTxt}>我要改变标题</Button>
      </Border>
      <Border>
          <TxtTwo>我是继承</TxtTwo>
      </Border>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(About)