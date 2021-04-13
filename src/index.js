import { createContext, useContext, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configure } from 'mobx';
import { RootStore } from './stores';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true,
});

const RootStoreContext = createContext;

ReactDOM.render(
    <StrictMode>
        <RootStoreContext.Provider value={new RootStore()}>
            <App />
        </RootStoreContext.Provider>
    </StrictMode>,
    document.getElementById('root')
);
