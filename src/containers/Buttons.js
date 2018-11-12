import React, {Component} from 'react';
import Buttons from '../components/Buttons';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";

class ButtonsContainer extends Component {
    render() {
        return (
            <Buttons {...this.props} />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    increaseZoom: bindActionCreators(
        actions.increaseZoom,
        dispatch
    ),
    decreaseZoom: bindActionCreators(
        actions.decreaseZoom,
        dispatch
    ),
    resetZoom: bindActionCreators(
        actions.resetZoom,
        dispatch
    )
});

export default connect(null,mapDispatchToProps)(ButtonsContainer);