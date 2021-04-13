import React from 'react';
import { useRootStore } from '../../contexts';
import './style.sass';

export const Preview = () => {
    const { imageStore } = useRootStore();
    return <div>preview</div>;
};
