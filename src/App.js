import { observer } from 'mobx-react-lite';
import { Form, Preview } from './components';
import './app.sass';

export const App = observer(function () {
    return (
        <main className="app">
            <Form />
            <Preview />
        </main>
    );
});
