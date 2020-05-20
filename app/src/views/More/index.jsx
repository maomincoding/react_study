import React, { PureComponent} from 'react'
import { Switch } from 'antd';

class More extends PureComponent{
    render(){
        return (
            <div>
                <Switch defaultChecked/>   
            </div>
        )
    }
}

export default More