import React from 'react';
import { shape, string, bool } from 'prop-types';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Flex, Grid, Panel, Icon } from 'scado';
import { Wrapper, PageHeader, Scrollable } from 'shared-components';
import gridProps from './gridProps';
import StocksList from './components/StocksList';
import NewStocksForm from './components/NewStocksForm';
import EditStocksForm from './components/EditStocksForm';

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
                        <PageHeader title="Aktien">
                            <Link to="/stocks/new"><Icon scale="xl">add_circle</Icon></Link>
                        </PageHeader>
                    </Panel>
                </Grid.Child>
                <Grid.Child area="body">
                    <Panel backgroundColor="white" shadow="s">
                        <Scrollable>
                            <Switch>
                                {match.isExact && <Redirect to={`${match.path}/list`} />}
                                <Route path={`${match.path}/list`} component={StocksList} />
                                <Route path={`${match.path}/new`} component={NewStocksForm} />
                                <Route path={`${match.path}/edit/:id`} component={EditStocksForm} />
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
