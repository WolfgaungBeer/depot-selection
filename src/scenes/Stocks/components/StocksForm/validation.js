export default (values) => {
    const errors = {};

    if (!values.token) {
        errors.token = 'Bitte trag ein Kürzel ein';
    }

    if (!values.name) {
        errors.name = 'Bitte trag einen Namen ein';
    }

    return errors;
};
