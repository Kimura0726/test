import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Content from './containers/Content';

const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <Content />
            </Provider>
        );
    }
}

export default App;