import styled from 'styled-components';

export const ServicesMainContainer = styled.section`
    background-color: #660000;
    width:100%;
    padding: 100px 0;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const ServicesWrapper = styled.div`
    width:80%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    @media screen and (max-width: 1220px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 700px){
        grid-template-columns: 1fr;
    }
`

export const GridItem = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: #fff;
    width:100%;
    padding: 20px 40px;
    text-align:center;
    cursor:pointer;
    transition: background .3s;

    &:hover{
        background: #76c38f;
    }
    &:hover *{
        color: #fff !important;
    }

    @media screen and (max-width: 700px){
        min-height:350px;
    }
`