import React from 'react';
import { Grid, Panel, Flex, Spacing, Text } from 'scado';
import gridConfig from './gridConfig';
import theme from '../theme';

const Home = () => (
    <div className="flex-container">
        <div className="inner-wrapper">
            <Grid.Parent {...gridConfig}>
                <Grid.Child area="main">
                    <Panel color={theme.color.white} shadow borderRadius="2px">main chart</Panel>
                </Grid.Child>
                <Grid.Child area="footer-left">
                    <Panel color={theme.color.white} shadow borderRadius="2px">detail chart 1</Panel>
                </Grid.Child>
                <Grid.Child area="footer-right">
                    <Panel color={theme.color.white} shadow borderRadius="2px">detail chart 2</Panel>
                </Grid.Child>
            </Grid.Parent>
        </div>
        <style jsx>{`
            .flex-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
            }
            .inner-wrapper {
                width: 95%;
                height: 95%;
            }
        `}</style>
    </div>
);

export default Home;
