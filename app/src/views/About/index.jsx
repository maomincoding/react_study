import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { actionsCreator } from './store/';
import { Link } from 'react-router-dom';
import { Border } from '../../styled';
import { TxtTwo } from './styleJs/style';
import DrawerView from '../../components/modules/DrawerView';
import { Button } from 'antd';

const mapStateToProps = (state) =>{
  return {
    title:state.get('about').get('title'),
    a1:state.get('about').get('a1'),
    a2:state.get('about').get('a2')
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    changeTxt(){
      dispatch(actionsCreator.txt());
    },
    changeAvalue(){
      dispatch(actionsCreator.avalue());
    }
  }
};

const About = (props) =>{
  const { title, changeTxt, a1, a2, changeAvalue} = props;
  useEffect(()=>{
    document.title = 'About页'
    console.log(props.match.params.id);
  },[props.match.params.id])
  return (
    <div>
      <Border>
         <p>{title}</p>
         <Button type="primary"><Link to="/">跳转到home页</Link></Button>
      </Border>
      <Border>
        <Button type="primary"><Link to="/more">跳转到more页</Link></Button>
      </Border>
      <Border>
         <Button onClick={changeTxt}>我要改变标题</Button>
      </Border>
      <Border>
          <TxtTwo>我是继承</TxtTwo>
      </Border>
      <Border>
      <DrawerView></DrawerView>
      </Border>
      <Border>
        <p>{a1}</p>
        <p>{a2}</p>
        <Button onClick={changeAvalue}>merge</Button>
      </Border>
    </div>
  )
};


export default connect(mapStateToProps, mapDispatchToProps)(About);