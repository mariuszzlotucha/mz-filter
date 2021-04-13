import { makeObservable, observable, action } from 'mobx';

import {
    MIN_FILTER_STRENGTH_VALUE,
    imageFilterTypes,
    imageFileTypes,
} from '../constants';
import {
    validateFilterStrength,
    validateFileType,
    validateFilterType,
    validatePath,
} from '../utils';

export class ImageStore {
    imagePath = '';
    filterType = imageFilterTypes[0];
    filterStrength = MIN_FILTER_STRENGTH_VALUE;
    imageFileType = imageFileTypes[0];

    constructor(rootStore) {
        makeObservable(
            this,
            {
                setImagePath: action.bound,
                setFilterType: action.bound,
                setFilterStrength: action.bound,
                setImageFileType: action.bound,
                saveImage: action.bound,
                imagePath: observable,
                filterType: observable,
                filterStrength: observable,
                imageFileType: observable,
            },
            { autoBind: true, rootStore: true }
        );
        this.rootStore = rootStore;
        window.rootStore = rootStore;
    }

    setImagePath(path) {
        if (!path) return;

        path = path.replace('C:\\fakepath\\', '');
        console.log(path);
        if (validatePath(path)) {
            this.imagePath = path;
        }
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
        console.log(this);
        if (
            validatePath(this.imagePath) &&
            validateFilterType(this.filterType) &&
            validateFilterStrength(this.strength) &&
            validateFileType(this.fileType)
        ) {
        }
    }
}
