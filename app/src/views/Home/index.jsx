import React,{useEffect} from 'react'
import '../../assets/css/home.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { connect } from 'react-redux'
import HeaderArea from '../../components/layout/Header'
import {Click,Click2} from './styleJs/style'
import { actionsCreator} from './store/'
const Home = (props) =>{
  useEffect(()=>{
    document.title = 'Home页'
  })
  return (
    <div>
      <HeaderArea></HeaderArea>
      <h3 className="home-tit">home</h3>
      <p>{props.name}</p>
      <Button type="primary"><Link to="/about/2">about</Link></Button>
      <Button onClick={props.handerClick}>打印</Button>
      <Click>1111</Click>
      <Click2 color={'true'}>1111</Click2>
    </div>
  )
}

const mapStateToProps = (state)=> {
  return {
    name: state.getIn(['home', 'name']), 
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    handerClick(){
      dispatch(actionsCreator.click());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)