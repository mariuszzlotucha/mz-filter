import React, { useRef, useEffect, useState } from 'react';
import { useRootStore } from '../../contexts';
import './style.sass';
import { observer } from 'mobx-react-lite';
import { fabric } from 'fabric';
import { useFabric } from './useFabric';
export const Preview = observer(() => {
    const { imageStore } = useRootStore();
    const { imagePath } = imageStore;

    const ref = useFabric((fabricCanvas) => {
        fabricCanvas.setBackgroundImage(
            new fabric.Image.fromURL(imagePath, () => {}, {
                left: 0,
                top: 0,
                width: 150,
                height: 150,
            })
        );
        fabricCanvas.renderAll.bind(fabricCanvas);
    });

    return (
        <div style={{ border: '1px solid red' }}>
            <canvas ref={ref} width={300} height={200} />
        </div>
    );
});
