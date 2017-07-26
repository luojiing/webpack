/**
 * Created by Administrator on 2017/3/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import formatTime from '../utils/formatTime';

class DisplayLog extends  Component {
    static propTypes = {
        log: PropTypes.array,
        quote: PropTypes.number
    };

    renderLog = () => {
        return this.props.log.map((time, i) => {
            return (<li className="log-item" key={i}>{formatTime(time)}</li>)
        })
    }

    renderEmpty = () => {
        let quote;
        switch (this.props.quote){
            case 1:
                quote = "I love you";
                break;
            case 2:
                quote = "做一家受人尊敬的企业，做一位受人尊敬的老师";
                break;
            case 3:
                quote = "专业老司机30年";
                break;
            case 4:
                quote = "敌军还有5秒到达战场";
                break;
            case 5:
                quote = "死亡如风，常伴吾生";
                break;
            default:
        }
        return <span className="empty-log">{quote}</span>
    }

    render(){
        const log = this.props.log.length === 0 ? this.renderEmpty() : this.renderLog();
        return (
            <ul className="Log">{log}</ul>
        )
    }
}

export default DisplayLog;