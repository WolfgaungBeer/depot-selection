import styled from 'styled-components';

export const LinkWrapper = styled.div`
    height: 4rem;
`;

export const Triangle = styled.div`
    position: absolute;
    right: 0px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent ${props => props.theme.app.backgroundColor} transparent transparent;
`;
