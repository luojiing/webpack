/**
 * Created by Administrator on 2017/3/24 0024.
 */
import React, {Component, PropTypes} from 'react';
import formatTime from '../utils/formatTime';
import Button from './Button';
import DisplayLog from './DisplayLog';

class TimeDisplay extends Component {
    static propTypes = {
        time: PropTypes.number.required
    }
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            on: false,
            log: [],
            quote: Math.floor((Math.random() * 5 ) + 1)
        };
        this.timer;
    }
    logTime = (newTime) => {
        this.setState({log: [this.state.time, ...this.state.log]});
        // this.state.log.push(this.state.time);
        // this.setState({log: this.state.log});
    }

    componentDidMount(){
        this.keyCommads();
    }

    componentWillUnmount(){
        window.removeEventListener('keyup');
        window.removeEventListener('keydown');
    }

    keyCommads = () => {
        window.addEventListener('keydown', e => e.preventDefault());
        window.addEventListener('keyup', (e) => {
            e.preventDefault();
            switch (e.keyCode) {
                case 32: // Space
                    this.toggleOn();
                    break;
                case 82: // R
                    this.resetTime();
                    break;
                case 76: // L
                    this.logTime();
                    break;
                case 13: //Enter
                    this.clearLog();
                    break;
                default:
                    return;
            }
        })
    }

    clearLog = () => {
        this.setState({log: [], quote: Math.floor((Math.random() * 5 ) + 1)})
    }

    toggleOn = () => {
        if(this.state.on) {
            clearInterval(this.timer)
        } else {
            this.timer = setInterval(() => this.setState({time: this.state.time + 1}), 10);
        }
        this.setState({on: !this.state.on});
    }

    resetTime = () => {
        this.setState({
            time: 0,
            quote: Math.floor((Math.random() * 5 ) + 1)
        })
    }

    renderControls = () => {
        return (
            <div>
                <Button onClick={this.toggleOn} className={this.state.on ? 'danger': 'success'}
                        text={this.state.on ? '停止': '开始'}/>
                <Button onClick={this.resetTime} className="warning" text="重置" />
                <Button onClick={this.logTime} className="primary" text="记录时间" />
                <Button onClick={this.clearLog} text="清除时间记录" />
            </div>
        )
    }

    render(){
        const time = formatTime(this.state.time);
        const controls = this.renderControls();
        return (
            <div className="TimeDisplay">
                <div className="time">
                    <h1 className="display-time">{time}</h1>
                    {controls}
                </div>
                <DisplayLog log={this.state.log} quote={this.state.quote} />
            </div>
        )
    }
}

export default TimeDisplay;