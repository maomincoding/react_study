import React, { useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../../assets/css/home.css'
import { Link } from 'react-router-dom'
import { Button, List } from 'antd';
import { connect } from 'react-redux'
import { Border } from '../../styled'
import { Click, Click2, Divtransition} from './styleJs/style'
import { actionsCreator } from './store/'

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

const Home = (props) => {
  const { name, list, datalist, handerClick, clickAnimation, flag, getdata } = props;
  const newList = datalist.toJS();
  useEffect(() => {
    document.title = 'Home页';
    getdata();
  }, [getdata])
  return (
    <div>
      <Border>
      <p className="home-tit">{name}</p>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={newList}
        renderItem={item => (
          <List.Item>
            <Link to={"/about/"+ item.id}>{item.txt}</Link>  
          </List.Item>
        )}
      />
      </Border>
      <Border>
        <Button type="primary"><Link to="/about/2">跳转到About页</Link></Button>
      </Border>
      <Border>
        <p>{list}</p>
        <Button onClick={handerClick}>打印</Button>
      </Border>
      <Border>
        <Button onClick={clickAnimation}>动画打开</Button>
        <CSSTransition in={flag} timeout={500} classNames="fade">
          <Divtransition>动画</Divtransition>
        </CSSTransition>
      </Border>
      <Border>
        <Click>样式组件</Click>
        <Click2 color={'true'}>条件样式组件</Click2>
      </Border>
      <Border>
        <TransitionGroup appear={true}>
          <CSSTransition timeout={1000} classNames='fade'>
            <Divtransition>页面初次加载的动画</Divtransition>
          </CSSTransition>
        </TransitionGroup>
      </Border>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)