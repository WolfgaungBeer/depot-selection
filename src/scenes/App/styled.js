import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`;

export const SideMenuSection = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: ${props => props.theme.app.sideMenuWidth};
    height: 100%;
    background-color: ${props => props.theme.app.sideMenuColor};
`;

export const MainSection = styled.div`
    position: absolute;
    top: 0px;
    left: ${props => props.theme.app.sideMenuWidth};
    width: ${props => css`calc(100% - ${props.theme.app.sideMenuWidth})`};
    height: 100%;
    background-color: ${props => props.theme.app.backgroundColor};
    overflow: hidden;
`;
