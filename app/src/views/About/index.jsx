import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { actionsCreator } from './store/'
import { Link } from 'react-router-dom'
import {Border } from './styleJs/style'
import { Button } from 'antd';

const mapStateToProps = (state) =>{
  return {
    title:state.get('about').get('title')
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    
  }
}

const About = (props) =>{
  const {title} = props;
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
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(About)