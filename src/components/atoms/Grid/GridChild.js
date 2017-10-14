import React from 'react';
import { string, node } from 'prop-types';

const propTypes = {
    area: string,
    children: node,
};

const defaultProps = {
    area: undefined,
    children: undefined,
};

const Child = ({ area, children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                grid-area: ${area};
            }
        `}</style>
    </div>
);

Child.propTypes = propTypes;
Child.defaultProps = defaultProps;

export default Child;
