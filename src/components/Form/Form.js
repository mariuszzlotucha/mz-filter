import React from 'react';
import { useRootStore } from '../../contexts';

export const Form = () => {
    const { imageStore } = useRootStore();
    return <form>form</form>;
};
