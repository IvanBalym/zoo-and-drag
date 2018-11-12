import React, {Component} from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className={'buttons'}>
                <button
                    className={'button button-inc-dec'}
                    onClick={this.props.increaseZoom}
                >
                    +
                </button>
                <button
                    className={'button button-inc-dec'}
                    onClick={this.props.decreaseZoom}
                >
                    -
                </button>
                <button
                    className={'button button-reset'}
                    onClick={this.props.resetZoom}
                >
                    Reset
                </button>
            </div>
        )
    }
}

export default Buttons;