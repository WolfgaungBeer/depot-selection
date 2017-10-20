import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Wrapper, SideMenuSection, MainSection, Scrollable } from './styled';
import SideMenu from '../SideMenu';

const App = () => (
    <Wrapper>
        <SideMenuSection>
            <Scrollable>
                <SideMenu />
            </Scrollable>
        </SideMenuSection>
        <MainSection>
            <Scrollable>
                <Switch>
                    <Route path="/" exact render={() => <div>home</div>} />
                    <Route path="/depots" exact render={() => <div>depots</div>} />
                    <Route path="/stocks" exact render={() => <div>stocks</div>} />
                    <Route path="/depots/new" exact render={() => <div>depots new</div>} />
                    <Route path="/stocks/new" exact render={() => <div>stocks new</div>} />
                </Switch>
            </Scrollable>
        </MainSection>
    </Wrapper>
);

export default App;
