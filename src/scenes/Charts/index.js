import React from 'react';
import { shape, string, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { Flex, Grid, Panel, Icon } from 'scado';
import { Wrapper, PageHeader } from 'shared-components';
import gridProps from './gridProps';
import BubbleChart from './components/BubbleChart';
import DoughnutChart from './components/DoughnutChart';

const propTypes = {
    match: shape({
        path: string,
        url: string,
        isExact: bool,
        params: shape({}),
    }),
};

const defaultProps = {
    match: undefined,
};

const Charts = ({ match }) => (
    <Flex justifyContent="center" alignItems="center">
        <Wrapper width="95%" height="95%">
            <Grid.Parent {...gridProps}>
                <Grid.Child area="header">
                    <Panel backgroundColor="white" shadow="s">
                        <PageHeader title="Diagramm">
                            <Link to="/depots/list"><Icon scale="xl">add_circle</Icon></Link>
                        </PageHeader>
                    </Panel>
                </Grid.Child>
                <Grid.Child area="chart">
                    <Panel backgroundColor="white" shadow="s">
                        <BubbleChart depotId={match.params.depotId} />
                    </Panel>
                </Grid.Child>
                <Grid.Child area="detail-left">
                    <Panel backgroundColor="white" shadow="s">
                        <DoughnutChart />
                    </Panel>
                </Grid.Child>
                <Grid.Child area="detail-right">
                    <Panel backgroundColor="white" shadow="s">
                        <span>detail-right</span>
                    </Panel>
                </Grid.Child>
            </Grid.Parent>
        </Wrapper>
    </Flex>
);

Charts.propTypes = propTypes;
Charts.defaultProps = defaultProps;

export default Charts;
