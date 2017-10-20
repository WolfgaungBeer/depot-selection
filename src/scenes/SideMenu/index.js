import React from 'react';
import { Flex, Icon, Spacing, Text } from 'scado';
import { HeaderWrapper } from './styled';
import MenuLink from './components/MenuLink';

const SideMenu = () => (
    <div>
        <HeaderWrapper>
            <Flex justifyContent="center" alignItems="center">
                <Spacing scale="s" right>
                    <Icon scale="xl" color="secondary">dashboard</Icon>
                </Spacing>
                <Text.Span scale="l" color="lightGray">Depot Selection</Text.Span>
            </Flex>
        </HeaderWrapper>
        <Spacing scale="xxl" top>
            <div>
                <MenuLink icon="home" to="/">HOME</MenuLink>
                <MenuLink icon="pie_chart" to="/depots">DEPOTS</MenuLink>
                <MenuLink icon="show_chart" to="/stocks">AKTIEN</MenuLink>
                <MenuLink icon="add" to="/depots/new">DEPOT ANLEGEN</MenuLink>
                <MenuLink icon="add" to="/stocks/new">AKTIE ANLEGEN</MenuLink>
            </div>
        </Spacing>
    </div>
);

export default SideMenu;
