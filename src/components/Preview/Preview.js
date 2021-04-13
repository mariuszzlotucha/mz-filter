import React from 'react';
import { useRootStore } from '../../contexts';
import './style.sass';
import { observer } from 'mobx-react-lite';

export const Preview = observer(() => {
    const { imageStore } = useRootStore();
    const { imagePath } = imageStore;
    return imagePath && <img src={imagePath} alt={imagePath} />;
});
