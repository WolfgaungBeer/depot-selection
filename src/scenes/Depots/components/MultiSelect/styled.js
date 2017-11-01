import styled from 'styled-components';

export const Wrapper = styled.div`
    display: inline-block;
    width: 100%;
    margin-bottom: ${props => (props.marginBottom ? '0.8rem' : undefined)};
`;
