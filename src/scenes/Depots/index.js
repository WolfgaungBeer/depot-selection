import React from 'react';
import { shape, string, bool } from 'prop-types';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Flex, Grid, Panel, Icon } from 'scado';
import { Wrapper, PageHeader, Scrollable } from 'shared-components';
import gridProps from './gridProps';
import DepotList from './components/DepotList';
import NewDepotForm from './components/NewDepotForm';
import EditDepotForm from './components/EditDepotForm';

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

const Stocks = ({ match }) => (
    <Flex justifyContent="center" alignItems="center">
        <Wrapper width="95%" height="95%">
            <Grid.Parent {...gridProps}>
                <Grid.Child area="header">
                    <Panel backgroundColor="white" shadow="s">
                        <PageHeader title="Depots">
                            <Link to="/depots/new"><Icon scale="xl">add_circle</Icon></Link>
                        </PageHeader>
                    </Panel>
                </Grid.Child>
                <Grid.Child area="body">
                    <Panel backgroundColor="white" shadow="s">
                        <Scrollable>
                            <Switch>
                                {match.isExact && <Redirect to={`${match.path}/list`} />}
                                <Route path={`${match.path}/list`} component={DepotList} />
                                <Route path={`${match.path}/new`} component={NewDepotForm} />
                                <Route path={`${match.path}/edit/:id`} component={EditDepotForm} />
                            </Switch>
                        </Scrollable>
                    </Panel>
                </Grid.Child>
            </Grid.Parent>
        </Wrapper>
    </Flex>
);

Stocks.propTypes = propTypes;
Stocks.defaultProps = defaultProps;

export default Stocks;
