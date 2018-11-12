import React, {Component} from 'react';
import ZoomBox from '../../components/ZoomBox';
import {connect} from "react-redux";

class ZoomBoxContainer extends Component {
    render() {
        return (
            <ZoomBox {...this.props} />
        )
    }
}

const mapStateToProps = ({zoomNDrag}) => {
    return {
        zoom: zoomNDrag.zoom
    }
};

export default connect(mapStateToProps)(ZoomBoxContainer);