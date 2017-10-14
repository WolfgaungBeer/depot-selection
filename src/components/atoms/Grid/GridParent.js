import React from 'react';
import { bool, string, node } from 'prop-types';
import { getGridDisplay } from './helpers';

const propTypes = {
    inline: bool,
    sub: bool,
    columns: string,
    rows: string,
    areas: string,
    columnGap: string,
    rowGap: string,
    children: node,
};

const defaultProps = {
    inline: undefined,
    sub: undefined,
    columns: undefined,
    rows: undefined,
    areas: undefined,
    columnGap: undefined,
    rowGap: undefined,
    children: undefined,
};

const Parent = ({ inline, sub, columns, rows, areas, columnGap, rowGap, children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                display: ${getGridDisplay(inline, sub)};
                grid-template-columns: ${columns};
                grid-template-rows: ${rows};
                grid-template-areas: ${areas};
                grid-column-gap: ${columnGap};
                grid-row-gap: ${rowGap};
                width: 100%;
                height: 100%;
            }
        `}</style>
    </div>
);

Parent.propTypes = propTypes;
Parent.defaultProps = defaultProps;

export default Parent;
