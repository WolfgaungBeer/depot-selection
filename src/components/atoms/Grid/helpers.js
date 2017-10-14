export const getGridDisplay = (inline, sub) => {
    let value = 'grid';
    if (inline) value = 'inline-grid';
    if (sub) value = 'subgrid';
    return value;
};
