import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

const About = (props) =>{
  useEffect(()=>{
    document.title = 'About页'
    console.log(props.match.params);
  })
  return (
    <div>
      <h3>about</h3>
      <Button><Link to="/">home</Link></Button>
    </div>
  )
}

export default About