import { isNumber, inRange } from 'lodash-es';
import {
    MIN_FILTER_STRENGTH_VALUE,
    MAX_FILTER_STRENGTH_VALUE,
    imageFilterTypes,
    imageFileTypes,
} from '../constants';

export const validateFilterType = (filterType) => {
    if (imageFilterTypes.has(filterType)) {
        return true;
    } else {
        throw new Error('Wrong filter type');
    }
};

export const validateFilterStrength = (strength) => {
    if (
        isNumber(strength) &&
        inRange(strength, MAX_FILTER_STRENGTH_VALUE, MIN_FILTER_STRENGTH_VALUE)
    ) {
        return true;
    } else {
        throw new Error('Wrong filterStrength value');
    }
};

export const validateFileType = (fileType) => {
    if (imageFileTypes.has(fileType)) {
        return true;
    } else {
        throw new Error('Wrong file type');
    }
};
