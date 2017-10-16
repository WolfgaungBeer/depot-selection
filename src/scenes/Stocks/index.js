import React from 'react';
import { Grid, Panel } from 'scado';
import gridConfig from './gridConfig';
import theme from '../theme';

const Stocks = () => (
    <div className="flex-container">
        <div className="inner-wrapper">
            <Grid.Parent {...gridConfig}>
                <Grid.Child area="form">
                    <Panel color={theme.color.white} shadow borderRadius="2px">
                        stocks form
                    </Panel>
                </Grid.Child>
                <Grid.Child area="list">
                    <Panel color={theme.color.white} shadow borderRadius="2px">
                        stocks list
                    </Panel>
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

export default Stocks;
