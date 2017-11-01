import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { InputField, Button } from 'scado';
import { Form } from './styled';
import validate from './validation';

const propTypes = {
    handleSubmit: func,
};

const defaultProps = {
    handleSubmit: undefined,
};

const StocksForm = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit}>
        <Field name="token" component={InputField} type="text" label="Kürzel" required />
        <Field name="name" component={InputField} type="text" label="Name" required />
        <Button type="submit">Speichern!</Button>
    </Form>
);

StocksForm.propTypes = propTypes;
StocksForm.defaultProps = defaultProps;

export default reduxForm({ form: 'stocks-form', validate })(StocksForm);
