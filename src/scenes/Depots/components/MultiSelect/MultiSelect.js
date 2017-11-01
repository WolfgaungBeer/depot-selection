import React from 'react';
import { shape, string, array, oneOfType, func, arrayOf, node, bool } from 'prop-types';
import Select from 'react-select';
import { Text } from 'scado';
import { Wrapper } from './styled';

const propTypes = {
    input: shape({
        value: oneOfType([string, array, shape]),
        onChange: func,
    }),
    options: arrayOf(shape({})),
    label: node,
    disabled: bool,
};

const defaultProps = {
    input: {
        value: undefined,
        onChange: undefined,
    },
    options: undefined,
    label: undefined,
    disabled: undefined,
};

const MultiSelect = ({ input, options, label, disabled }) => (
    <Wrapper marginBottom={label}>
        {label && <Text.Label>{label}</Text.Label>}
        <Select
            value={input.value}
            options={options}
            onChange={input.onChange}
            multi
            disabled={disabled}
            placeholder={label ? 'Auswählen...' : 'Aktien:'}
        />
    </Wrapper>
);

MultiSelect.propTypes = propTypes;
MultiSelect.defaultProps = defaultProps;

export default MultiSelect;
