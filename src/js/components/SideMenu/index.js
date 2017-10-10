import React from 'react';
import { Link } from 'react-router-dom';
import SideMenuHeader from '../SideMenuHeader';
import Icon from '../Icon';
import Spacing from '../Spacing';
import Nav from '../Nav';
import NavLink from '../NavLink';

const SideMenu = () => (
    <div id="sidemenu">
        <SideMenuHeader>
            <Icon>apps</Icon>
            <span> Depot Selection</span>
        </SideMenuHeader>
        <Spacing size="l" />
        <Nav>
            <NavLink active>
                <Link to="/stocks"><Icon>show_chart</Icon> Aktien</Link>
            </NavLink>
            <NavLink>
                <Link to="/depots"><Icon>pie_chart</Icon> Depots</Link>
            </NavLink>
        </Nav>
    </div>
);

export default SideMenu;
