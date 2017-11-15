import React from 'react';
import { func } from 'prop-types';
import { Flex } from 'scado';
import { Wrapper, Scrollable } from 'shared-components';

const propTypes = {
    loadChart: func,
};

const defaultProps = {
    depot: undefined,
    loadChart: undefined,
};

class BubbleChart extends React.PureComponent {
    constructor(props) {
        super(props);
        this.chart = null;
    }

    componentDidMount() {
        const { loadChart } = this.props;
        this.chart = loadChart('bubble-chart');
    }

    componentWillUnmount() {
        if (this.chart) this.chart.destroy();
    }

    render() {
        return (
            <Flex justifyContent="center" alignItems="center">
                <Wrapper width="75%" height="95%">
                    <Scrollable>
                        <canvas id="bubble-chart" />
                    </Scrollable>
                </Wrapper>
            </Flex>
        );
    }
}

BubbleChart.propTypes = propTypes;
BubbleChart.defaultProps = defaultProps;

export default BubbleChart;
