import { createContext, useContext } from 'react';
import { RootStore } from '../stores';

const RootStoreContext = createContext(undefined);

export function RootStoreProvider({ children }) {
    const root = new RootStore();

    return (
        <RootStoreContext.Provider value={root}>
            {children}
        </RootStoreContext.Provider>
    );
}

export function useRootStore() {
    const context = useContext(RootStoreContext);
    if (context === undefined) {
        throw new Error('useRootStore must be used within RootStoreProvider');
    }

    return context;
}
