/**
 * Created by Administrator on 2017/3/24 0024.
 */
import React, {Component, PropTypes} from 'react';
class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        text: PropTypes.string,
        className: PropTypes.string
    };

    render(){
        const {text, onClick, className} = this.props;
        return (
            <button onClick={onClick} className={`Button ${className}`} >{text}</button>
        )
    }
}
export default Button;