import { observer } from 'mobx-react-lite';
import { Form, Preview } from './components';

export const App = observer(function () {
    return (
        <main className="App">
            <Form />
            <Preview />
        </main>
    );
});
