import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../contexts';
import './style.sass';
import {
    MIN_FILTER_STRENGTH_VALUE,
    MAX_FILTER_STRENGTH_VALUE,
    imageFilterTypes,
    imageFileTypes,
} from '../../constants';

export const Form = observer(() => {
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

    const handleSubmit = (ev) => {
        ev.preventDefault();

        saveImage();
    };

    const fileInput = useRef(null);

    const handleFileInput = () => {
        const file = fileInput.current.files[0];
        const reader = new FileReader();
        reader.addEventListener(
            'load',
            function () {
                setImagePath(reader.result);
            },
            false
        );
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const summary = `You've choosen ${filterStrength}% ${filterType} filter. Conversion to ${imageFileType.toUpperCase()}`;

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleFileInput}
                    ref={fileInput}
                />

                <select
                    defaultValue={filterType}
                    onChange={(ev) => setFilterType(ev.target.value)}
                >
                    {imageFilterTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>

                <input
                    type="range"
                    min={MIN_FILTER_STRENGTH_VALUE}
                    max={MAX_FILTER_STRENGTH_VALUE}
                    value={filterStrength}
                    onChange={(ev) => setFilterStrength(+ev.target.value)}
                />

                <div className="file-type-picker">
                    {imageFileTypes.map((type) => (
                        <label htmlFor={type} key={type}>
                            {type}
                            <input
                                type="radio"
                                id={type}
                                value={type}
                                checked={type === imageFileType}
                                onChange={(ev) =>
                                    setImageFileType(ev.target.value)
                                }
                            />
                        </label>
                    ))}
                </div>

                <button type="submit">click me!</button>
            </form>
            <span>{summary}</span>
        </>
    );
});
