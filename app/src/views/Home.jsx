import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { connect } from 'react-redux'
import HeaderArea from '../components/layout/Header'

const Home = (props) =>{
  return (
    <div>
      <HeaderArea></HeaderArea>
      <h3>home</h3>
      <p>{props.name}</p>
      <Button type="primary"><Link to="/about/2">about</Link></Button>
    </div>
  )
}

const mapStateToProps = (state)=> {
  return {
    name:state.name
  }
}

export default connect(mapStateToProps, null)(Home)