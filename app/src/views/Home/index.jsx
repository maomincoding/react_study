import React, { useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../../assets/css/home.css'
import { Link } from 'react-router-dom'
import { Button,List } from 'antd';
import { connect } from 'react-redux'
import HeaderArea from '../../components/layout/Header'
import { Click, Click2, Divtransition } from './styleJs/style'
import { actionsCreator } from './store/'
// import {toJS} from 'immutable'

const Home = (props) => {
  const {name,list,datalist,handerClick,clickAnimation,flag,getdata} = props;
  const newList = datalist.toJS();
  useEffect(()=>{
    document.title = 'Home页';
    getdata();
  },[getdata])
  return (
    <div>
      <HeaderArea></HeaderArea>
      <h3 className="home-tit">home</h3>
      <p>{name}</p>
      <p>{list}</p>
      <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={newList}
      renderItem={item => (
        <List.Item>
         {item}
        </List.Item>
      )}
    />
      <Button type="primary"><Link to="/about/2">about</Link></Button>
      <Button onClick={handerClick}>打印</Button>
      <Button onClick={clickAnimation}>动画打开</Button>
      <Click>1111</Click>
      <Click2 color={'true'}>1111</Click2>
      <CSSTransition in={flag} timeout={500} classNames="fade">
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