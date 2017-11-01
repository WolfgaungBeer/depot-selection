export default (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Bitte trag einen Namen ein';
    }

    return errors;
};
