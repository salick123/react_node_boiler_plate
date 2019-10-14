import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../app/containers/Home';
const initApp = () => {
    hydrate(<Home/>, document.getElementById('root_app'));
};
initApp();
