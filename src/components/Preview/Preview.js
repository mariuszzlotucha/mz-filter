import React from 'react';
import { useRootStore } from '../../contexts';
import './style.sass';
import { observer } from 'mobx-react-lite';

export const Preview = observer(() => {
    const { imageStore } = useRootStore();
    const {
        setImagePath,
        setFilterType,
        setFilterStrength,
        setImageFileType,
        saveImage,
        imagePath,
        filterType,
        filterStrength,
        imageFileType,
    } = imageStore;
    return (
        <div>
            preview
            {imagePath && <img src={imagePath} />}
        </div>
    );
});
