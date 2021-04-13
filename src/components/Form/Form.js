import React from 'react';
import { useRootStore } from '../../contexts';

export const Form = () => {
    const { imageStore } = useRootStore();
    const {
        setImagePath,
        setFilterType,
        setFilterStrength,
        setImageFileType,
        saveImage,
    } = imageStore;

    const handleSubmit = (ev) => {
        ev.preventDefault();

        saveImage();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input />

            <input />
            <input />
            <input />

            <button>click me!</button>
        </form>
    );
};
