import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionsCreator } from './store/';
import { Switch, Button, List,Input  } from 'antd';
import { Link } from 'react-router-dom';
import { Border } from '../../styled';
import { Author } from './styleJs/style';



const mapStateToProps = (state) => {
    return {
        list: state.get('more').get('list'),
        login: state.get('more').get('login'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getlist() {
            dispatch(actionsCreator.getMoreList());
        },
        loginIn(user,pass){
            dispatch(actionsCreator.login(user.state.value,pass.state.value));
        }
    }
};

class More extends PureComponent {
    render() {
        const { list,login,loginIn } = this.props;
        const newList = list.toJS();
        return (
            <div>
                <Border>
                    <Author></Author>
                </Border>
                <Border>
                    <Switch defaultChecked />
                </Border>
                <Border>
                    <Button type="primary">
                        <Link to="/">跳到home</Link>
                    </Button>
                </Border>
                <Border>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={newList}
                        renderItem={item => (
                            <List.Item>
                                {item.txt}
                            </List.Item>
                        )}
                    />
                </Border>
                <Border>
                    <Input placeholder="Basic usage"  ref={(input)=>{this.user=input}} />
                    <Input placeholder="Basic usage" type="password" ref={(input)=>{this.pass=input}} />
                    <Button type="primary" onClick={()=>loginIn(this.user,this.pass)}>登录</Button>
                </Border>
                <Border>
                    <p>{login?'true':'false'}</p>
                </Border>
            </div>
        )
    }
    componentDidMount() {
        this.props.getlist();
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(More);