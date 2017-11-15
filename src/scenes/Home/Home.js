import React from 'react';
import { func } from 'prop-types';
import { Button, Spacing, Flex } from 'scado';
import { Wrapper } from 'shared-components';

const propTypes = {
    navigate: func,
};

const defaultProps = {
    navigate: undefined,
};

const Home = ({ navigate }) => (
    <Flex justifyContent="center" alignItems="center">
        <Wrapper width="50%" height="50%">
            <Button raised color="primary" scale="xxl" onClick={() => navigate('/depots/list')}>Depots</Button>
            <Spacing top scale="xxl" />
            <Button raised color="primary" scale="xxl" onClick={() => navigate('/stocks/list')}>Aktien</Button>
        </Wrapper>
    </Flex>
);

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
