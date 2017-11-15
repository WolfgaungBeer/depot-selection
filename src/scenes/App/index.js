import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { push } from 'routerSvc';
import { Wrapper, SideMenuSection, MainSection } from './styled';
import SideMenu from '../SideMenu';
import Home from '../Home';
import Depots from '../Depots';
import Stocks from '../Stocks';
import Charts from '../Charts';

class App extends React.PureComponent {
    componentDidMount() {
        push('/home');
    }

    render() {
        return (
            <Wrapper>
                <SideMenuSection>
                    <SideMenu />
                </SideMenuSection>
                <MainSection>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/depots" component={Depots} />
                        <Route path="/stocks" component={Stocks} />
                        <Route path="/charts/:depotId" component={Charts} />
                    </Switch>
                </MainSection>
            </Wrapper>
        );
    }
}

export default App;
