import React,{Component} from 'react';

class DragCircle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: this.props.position.top,
            left: this.props.position.left,
            width: 80*this.props.zoom,
            height: 80*this.props.zoom
        }
    }

    componentWillReceiveProps (nextProps) {
        if(nextProps.zoom===this.props.zoom){
            this.setState({
                top: nextProps.position.top,
                left: nextProps.position.left,
            });
        }
        this.setState({
            width: 80*nextProps.zoom,
            height: 80*nextProps.zoom
        })
    }

    componentWillUpdate(prevProps) {
        if (this.props.zoom !== prevProps.zoom) {
            this.setState({
                top: this.props.position.top,
                left: this.props.position.left
            })
        }
    }

    render() {
        return (
            <div
                className={'drag-circle'}
                style={this.state}
            />
        )
    }
}

export default DragCircle;