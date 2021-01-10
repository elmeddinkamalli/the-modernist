import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background: transparent;
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`

export const TopStrip = styled.div`
    width: 100%;
    height: 6px;
    background: #76c38f;
`

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 30px 40px;

    @media screen and (max-width:370px){
        padding: 30px 20px;
    }
`

export const NavLeft = styled.div`
    display: flex;
    flex-direction: column;
`

export const NavRight = styled.nav`
    margin:0;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: right .5s;

    @media screen and (max-width:1125px){
        position: fixed;
        right: ${({menu}) => menu ? '0' : '-100%'};
        top: 0;
        background: #000;
        height: 100vh;
        z-index: 1000;
        width: 350px;
    }
    @media screen and (max-width:370px){
        width:100%;
    }
`

export const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style:none;

    @media screen and (max-width:1125px){
        flex-direction:column;
    }
`