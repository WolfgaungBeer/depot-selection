import React from 'react';
import { node } from 'prop-types';
import { AbsoluteWrapper, RelativeWrapper } from '../styled';

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const Scrollable = ({ children }) => (
    <RelativeWrapper>
        <AbsoluteWrapper>
            <RelativeWrapper overflow="auto">
                {children}
            </RelativeWrapper>
        </AbsoluteWrapper>
    </RelativeWrapper>
);

Scrollable.propTypes = propTypes;
Scrollable.defaultProps = defaultProps;

export default Scrollable;
