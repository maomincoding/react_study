import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionsCreator } from './store/'
import { Switch, Button, List } from 'antd';
import { Link } from 'react-router-dom'
import { Border } from '../../styled'
import { Author } from './styleJs/style'

class More extends PureComponent {
    render() {
        const { list } = this.props;
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
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props);
        this.props.getlist();
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('more').get('list')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getlist() {
            dispatch(actionsCreator.getMoreList());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(More)