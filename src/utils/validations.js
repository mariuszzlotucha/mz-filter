import { isNumber, inRange } from 'lodash-es';
import {
    MIN_FILTER_STRENGTH_VALUE,
    MAX_FILTER_STRENGTH_VALUE,
    imageFilterTypes,
    imageFileTypes,
} from '../constants';

const validateFilterType = (filterType) => {
    if (imageFilterTypes.includes(filterType)) {
        return true;
    } else {
        // throw new Error('Wrong filter type');
    }
};

const validateFilterStrength = (strength) => {
    if (
        isNumber(strength) &&
        inRange(
            strength,
            MIN_FILTER_STRENGTH_VALUE,
            MAX_FILTER_STRENGTH_VALUE + 1
        )
    ) {
        return true;
    } else {
        // throw new Error('Wrong filterStrength value');
    }
};

const validateFileType = (fileType) => {
    if (imageFileTypes.includes(fileType)) {
        return true;
    } else {
        // throw new Error('Wrong file type');
    }
};

const validatePath = (path) => {
    if (path) return true;
};

export {
    validatePath,
    validateFilterType,
    validateFilterStrength,
    validateFileType,
};
