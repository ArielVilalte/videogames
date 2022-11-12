import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const DivContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding-left: 0px;
`;

const LinkStyled = css`
    text-decoration: none;
`;

const NavLinkStyled = styled(NavLink)`
    ${LinkStyled}
`;

const H2 = styled.h2`
    color: #f5c150;
`;

export {
    DivContainer,
    Div,
    Ul,
    NavLinkStyled,
    H2
}