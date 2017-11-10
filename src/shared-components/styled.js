import styled from 'styled-components';

export const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const AbsoluteWrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const RelativeWrapper = styled.div`
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: ${props => props.overflow};
`;
