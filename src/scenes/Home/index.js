import React from 'react';
import { Grid, Panel, Flex, Spacing, Text } from 'scado';
import gridProps from './grid';
import theme from '../theme';

const { color } = theme;

const propTypes = {
};

const defaultProps = {
};


const Home = () => (
    <div className="flex-container">
        <div className="inner-wrapper">
            <Grid.Parent {...gridProps}>
                <Grid.Child area="header">
                    <Panel color={color.white} shadow borderRadius="2px">
                        <Flex alignItems="center">
                            <Spacing size="1rem" left>
                                <Text>Ein Depot auswählen um es auszuwerten:</Text>
                            </Spacing>
                        </Flex>
                    </Panel>
                </Grid.Child>
                <Grid.Child area="main">
                    <Panel color={color.white} shadow borderRadius="2px">test</Panel>
                </Grid.Child>
                <Grid.Child area="footer-left">
                    <Panel color={color.white} shadow borderRadius="2px">test</Panel>
                </Grid.Child>
                <Grid.Child area="footer-right">
                    <Panel color={color.white} shadow borderRadius="2px">test</Panel>
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

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
