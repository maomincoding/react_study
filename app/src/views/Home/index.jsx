import React, { useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../../assets/css/home.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { connect } from 'react-redux'
import HeaderArea from '../../components/layout/Header'
import { Click, Click2, Divtransition } from './styleJs/style'
import { actionsCreator } from './store/'
const Home = (props) => {
  useEffect(() => {
    document.title = 'Home页';
    props.getdata();
  })
  return (
    <div>
      <HeaderArea></HeaderArea>
      <h3 className="home-tit">home</h3>
      <p>{props.name}</p>
      <p>{props.list}</p>
      <p>{props.datalist}</p>
      <Button type="primary"><Link to="/about/2">about</Link></Button>
      <Button onClick={props.handerClick}>打印</Button>
      <Button onClick={props.clickAnimation}>动画打开</Button>
      <Click>1111</Click>
      <Click2 color={'true'}>1111</Click2>
      <CSSTransition in={props.flag} timeout={500} classNames="fade">
        <Divtransition>动画</Divtransition>
      </CSSTransition>
      <TransitionGroup appear={true}>
        <CSSTransition timeout={1000} classNames='fade'>
          <Divtransition>动画1</Divtransition>
        </CSSTransition>
      </TransitionGroup>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.getIn(['home', 'name']),
    list: state.getIn(['home', 'list']),
    datalist: state.getIn(['home', 'datalist']),
    flag: state.getIn(['home', 'flag'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handerClick() {
      dispatch(actionsCreator.click());
    },
    clickAnimation() {
      dispatch(actionsCreator.animat());
    },
    getdata() {
      dispatch(actionsCreator.getList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)