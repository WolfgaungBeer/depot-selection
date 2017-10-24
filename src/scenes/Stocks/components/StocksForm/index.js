import React from 'react';
import { func, shape } from 'prop-types';
import { Flex } from 'scado';
import Form from './Form';

const propTypes = {
    onSubmit: func,
    initialValues: shape({}),
};

const defaultProps = {
    onSubmit: undefined,
    initialValues: undefined,
};

const StocksForm = ({ onSubmit, initialValues }) => (
    <Flex justifyContent="center" alignItems="center">
        <Form onSubmit={onSubmit} initialValues={initialValues} />
    </Flex>
);

StocksForm.propTypes = propTypes;
StocksForm.defaultProps = defaultProps;

export default StocksForm;
