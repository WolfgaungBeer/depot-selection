import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { InputField, Button } from 'scado';
import { Form } from './styled';
import validate from './validation';
import MultiSelect from '../MultiSelect';

const propTypes = {
    handleSubmit: func,
};

const defaultProps = {
    handleSubmit: undefined,
};

const DepotForm = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit}>
        <Field name="name" component={InputField} type="text" label="Name" required />
        <Field name="stocks" component={MultiSelect} />
        <Button type="submit">Anlegen!</Button>
    </Form>
);

DepotForm.propTypes = propTypes;
DepotForm.defaultProps = defaultProps;

export default reduxForm({ form: 'depot-form', validate })(DepotForm);
