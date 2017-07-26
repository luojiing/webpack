/**
 * Created by Administrator on 2017/3/24 0024.
 */
import React, {Component} from 'react';

class Ref extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // 使用原生的 DOM API 获取焦点
        this.refs.myInput.focus();
        console.log(this.refs.myInput.value);
    }

    render() {
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
            <div>
                <input type="text" ref="myInput"/>
                <input
                    type="button"
                    value="点我输入框获取焦点"
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default Ref;