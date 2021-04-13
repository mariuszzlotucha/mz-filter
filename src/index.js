import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { configure } from 'mobx';
import { RootStoreProvider } from './contexts';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true,
});

ReactDOM.render(
    <StrictMode>
        <RootStoreProvider>
            <App />
        </RootStoreProvider>
    </StrictMode>,
    document.getElementById('root')
);
