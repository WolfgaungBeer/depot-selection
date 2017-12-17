import React from 'react';
import { shape, func } from 'prop-types';
import { Flex } from 'scado';
import { Wrapper, Scrollable } from 'shared-components';

const propTypes = {
    selectedDepot: shape({}),
    loadChart: func,
};

const defaultProps = {
    selectedDepot: undefined,
    loadChart: undefined,
};

class BubbleChart extends React.PureComponent {
    constructor(props) {
        super(props);
        this.chart = null;
    }

    componentDidMount() {
        const { selectedDepot, loadChart } = this.props;
        if (selectedDepot) this.chart = loadChart('doughnut-chart');
    }

    componentWillReceiveProps(nextProps) {
        const { selectedDepot, loadChart } = nextProps;
        if (selectedDepot) this.chart = loadChart('doughnut-chart');
    }

    componentWillUnmount() {
        if (this.chart) this.chart.destroy();
    }

    render() {
        const { selectedDepot } = this.props;
        if (!selectedDepot) return null;

        return (
            <Flex justifyContent="center" alignItems="center">
                <Wrapper width="65%" height="85%">
                    <Scrollable>
                        <canvas id="doughnut-chart" />
                    </Scrollable>
                </Wrapper>
            </Flex>
        );
    }
}

BubbleChart.propTypes = propTypes;
BubbleChart.defaultProps = defaultProps;

export default BubbleChart;
