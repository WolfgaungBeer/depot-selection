import { Wrapper } from 'shared-components';

export const DepotWrapper = Wrapper.extend`
    margin-bottom: 0.5rem;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.color.lightGray};
`;
