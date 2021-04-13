import React from 'react';
import { useRootStore } from '../../contexts';
import './style.sass';

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
        <form onSubmit={handleSubmit} className="form">
            <input />

            <input />
            <input />
            <input />

            <button>click me!</button>
        </form>
    );
};
