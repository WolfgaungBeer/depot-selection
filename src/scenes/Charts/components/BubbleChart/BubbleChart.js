import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { Flex } from 'scado';
import { Wrapper, Scrollable } from 'shared-components';

const propTypes = {
    depot: shape({
        id: string,
        name: string,
        stocks: arrayOf(string),
    }),
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
        const { loadChart, depot } = this.props;
        this.chart = loadChart('bubble-chart', depot);
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
