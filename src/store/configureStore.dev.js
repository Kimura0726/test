import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import submit from '../reducers/submit';

export default function configureStore() {
    const store = createStore(
        submit,
        applyMiddleware(createLogger()),
    );
    return store;
}
