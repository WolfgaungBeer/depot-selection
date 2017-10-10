import React from 'react';
import { Route } from 'react-router-dom';

const Main = () => (
    <div id="main">
        <Route path="/stocks" render={() => <div>Aktien</div>} />
        <Route path="/depots" render={() => <div>Depots</div>} />
    </div>
);

export default Main;
