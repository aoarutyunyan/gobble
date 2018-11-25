import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTag } from '@fortawesome/free-solid-svg-icons';

library.add(faTag);


ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
