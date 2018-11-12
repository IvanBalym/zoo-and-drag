import React, {Component} from 'react';
import DragCircleContainer from '../../containers/DragCircle';

class ZoomBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {
                top: 0,
                left: 0
            }
        };
    }

    handleClick(e) {
        const element = e.currentTarget.getBoundingClientRect();
        const circle = e.currentTarget.firstChild.getBoundingClientRect();
        const top = e.clientY-element.top-circle.height/2;
        const topMax = element.height-circle.height-8;
        const topMin = 0;
        const topPersent = ((Math.min(Math.max(parseInt(top), topMin), topMax))/(400*this.props.zoom))*100;
        const left = e.clientX-element.left-circle.width/2;
        const leftMax = element.width-circle.width-8;
        const leftMin = 0;
        const leftPersent = ((Math.min(Math.max(parseInt(left), leftMin), leftMax))/(800*this.props.zoom))*100;

        this.setState({
            position: {
                top: `${topPersent}%`,
                left: `${leftPersent}%`
            }
        })
    }

    render() {
        const blockSize = {
            width: 800*this.props.zoom,
            height: 400*this.props.zoom
        };
        return (
            <div
                className={'zoom-box'}
                style={blockSize}
                onClick={this.handleClick.bind(this)}
            >
                <DragCircleContainer position={this.state.position}/>
            </div>
        )
    }
}

export default ZoomBox;