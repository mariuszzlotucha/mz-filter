import { makeAutoObservable } from 'mobx';

import { MIN_FILTER_STRENGTH_VALUE } from '../constants';
import {
    validateFilterStrength,
    validateFileType,
    validateFilterType,
} from '../utils';

export class ImageStore {
    imagePath;
    filterType;
    filterStrength = MIN_FILTER_STRENGTH_VALUE;
    imageFileType;

    constructor(rootStore) {
        makeAutoObservable(this, { rootStore: false });
        this.rootStore = rootStore;
    }

    setImagePath(path) {
        this.imagePath = path;
    }

    setFilterType(filterType) {
        if (validateFilterType(filterType)) {
            this.filterType = filterType;
        }
    }

    setFilterStrength(strength) {
        if (validateFilterStrength(strength)) {
            this.filterStrength = strength;
        }
    }

    setImageFileType(fileType) {
        if (validateFileType(fileType)) {
            this.imageFileType = fileType;
        }
    }

    saveImage() {
        if (
            this.imagePath &&
            validateFilterType(this.filterType) &&
            validateFilterStrength(this.strength) &&
            validateFileType(this.fileType)
        ) {
        }
    }
}
