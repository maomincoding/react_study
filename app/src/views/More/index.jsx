import React, { PureComponent } from 'react'
import { Switch,Button } from 'antd';
import { Link } from 'react-router-dom'
import { Border } from '../../styled'
class More extends PureComponent {
    render() {
        return (
            <div>
                <Border>
                    <Switch defaultChecked />
                </Border>
                <Border>
                    <Button type="primary">
                        <Link to="/">跳到home</Link>
                    </Button>
                </Border>
            </div>
        )
    }
}

export default More