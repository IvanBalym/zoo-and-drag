import * as constants from '../constants';

export const increaseZoom = () => {
    return {
        type: constants.INCREASE_ZOOM
    }
};

export const decreaseZoom = () => {
    return {
        type: constants.DECREASE_ZOOM
    }
};

export const resetZoom = () => {
    return {
        type: constants.RESET_ZOOM
    }
};
