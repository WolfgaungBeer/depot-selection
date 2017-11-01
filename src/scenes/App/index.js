import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Wrapper, SideMenuSection, MainSection } from './styled';
import SideMenu from '../SideMenu';
import Depots from '../Depots';
import Stocks from '../Stocks';

const App = () => (
    <Wrapper>
        <SideMenuSection>
            <SideMenu />
        </SideMenuSection>
        <MainSection>
            <Switch>
                <Route path="/" exact render={() => <div>home</div>} />
                <Route path="/depots" component={Depots} />
                <Route path="/stocks" component={Stocks} />
            </Switch>
        </MainSection>
    </Wrapper>
);

export default App;
