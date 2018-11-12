import * as constants from '../../constants';

const initialState = {
    zoom: 1
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.INCREASE_ZOOM:
            return {
                ...state,
                zoom: state.zoom+0.1
            };

        case constants.DECREASE_ZOOM:
            return {
                ...state,
                zoom: state.zoom>0.3?state.zoom-0.1:0.2
            };

        case constants.RESET_ZOOM:
            return initialState;

        default:
            return state
    }
}