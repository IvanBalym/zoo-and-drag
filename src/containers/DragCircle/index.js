import React,{Component} from 'react';
import DragCircle from '../../components/DragCircle';
import {connect} from "react-redux";

class DragCircleContainer extends Component {
    render() {
        return (
            <DragCircle {...this.props}/>
        )
    }
}

const mapStateToProps = ({zoomNDrag}) => {
    return {
        zoom: zoomNDrag.zoom
    }
};

export default connect(mapStateToProps)(DragCircleContainer);