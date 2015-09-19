import React from 'react';
import 'babel-core/polyfill.js';
import Components from './components/components.js';
import './app-styles/app.styl';

React.render(

    <Components/>,
    document.getElementById('app')
);
