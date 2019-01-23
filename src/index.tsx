import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import './lib/flexible/flexible';

import Apply from './pages/Apply/index';
import KnowledgeDetails from './pages/KnowledgeDetails/index';
import ApplyJoin from './pages/ApplyJoin/index';
import OfflineDetails from './pages/OfflineDetails/index';
import ShortVideo from './pages/ShortVideo/index';

import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Apply}></Route>
            <Route path="/apply" component={Apply}></Route>
            <Route path="/details" component={KnowledgeDetails}></Route>
            <Route path="/applyJoin" component={ApplyJoin}></Route>
            <Route path="/offline" component={OfflineDetails}></Route>
            <Route path="/shortVideo" component={ShortVideo}></Route>
        </div>
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
