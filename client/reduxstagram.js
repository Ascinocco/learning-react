// react
import React from 'react';
import { render } from 'react-dom';

// css
import css from './styles/style.styl';

// my components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// this is more or less reacts equiv to vue js router
// everything is pretty self explanitory
// with the one caviat that IndexRoute is what to load when the root
// route is hit even though you are saying the path="/" goes to main
// which technicially it does. But IndexRoute tell react what component
// to load by default when loading the root route
// perhaps a better name might be DefaultComponent
const router = (
    <Router history={ browserHistory }>
        <Route path="/" component={ Main }>
            <IndexRoute component={ PhotoGrid }></IndexRoute>
            <Route path="/view/:postId" component={ Single }></Route>
        </Route>
    </Router>
);

// pass the router here instead of a component because we want to 
// load the whole app with child components and routing
render(router, document.getElementById('root'));
