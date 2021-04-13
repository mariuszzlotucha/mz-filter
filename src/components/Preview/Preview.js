import React from 'react';
import { useRootStore } from '../../contexts';

export const Preview = () => {
    const { imageStore } = useRootStore();
    return <div>preview</div>;
};
