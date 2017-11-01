import React from 'react';
import { shape, string, array, oneOfType, func, arrayOf } from 'prop-types';
import Select from 'react-select';
import { Text } from 'scado';
import { Wrapper } from './styled';

const propTypes = {
    input: shape({
        value: oneOfType([string, array, shape]),
        onChange: func,
    }),
    options: arrayOf(shape({})),
};

const defaultProps = {
    input: {
        value: undefined,
        onChange: undefined,
    },
    options: undefined,
};

const MultiSelect = ({ input, options }) => (
    <Wrapper>
        <Text.Label>Aktien:</Text.Label>
        <Select value={input.value} options={options} onChange={input.onChange} multi />
    </Wrapper>
);

MultiSelect.propTypes = propTypes;
MultiSelect.defaultProps = defaultProps;

export default MultiSelect;
