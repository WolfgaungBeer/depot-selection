import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spacing, Icon } from 'scado';
import SideBar from './components/SideBar';
import Main from './components/Main';
import SideBarHeader from './components/SideBarHeader';
import SideBarMenu from './components/SideBarMenu';
import MenuItem from './components/MenuItem';
import Home from '../Home';
import Stocks from '../Stocks';
import Depots from '../Depots';

const App = () => (
    <div>
        <SideBar>
            <SideBarHeader icon="dashboard" title="Depot Selection" />
            <Spacing size="3rem" top />
            <SideBarMenu>
                <MenuItem to="/" icon="home" text="Home" />
                <MenuItem to="/depots" icon="pie_chart" text="Depots" />
                <MenuItem to="/stocks" icon="show_chart" text="Aktien" />
            </SideBarMenu>
        </SideBar>
        <Main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/depots" component={Depots} />
                <Route path="/stocks" component={Stocks} />
            </Switch>
        </Main>
        <style jsx>{`
            div {
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
            }
        `}</style>
    </div>
);

export default App;
