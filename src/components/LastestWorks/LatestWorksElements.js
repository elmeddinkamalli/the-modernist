import styled from 'styled-components';

export const LatestWorksMainContainer = styled.section`
    background-color: #660000;
    width:100%;
    padding-bottom: 40px;
`

export const LatestWorksWrapper = styled.div`
    width:80%;
    display: grid;
    grid-template-rows: 1fr 2fr 2fr;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    position: relative;
    grid-gap: 30px;

    @media screen and (max-width:1000px){
        grid-template-rows: 1fr 2fr 2fr 2fr;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    @media screen and (max-width:700px){
        grid-template-rows: 1fr 2fr 2fr 2fr 2fr;
        grid-template-columns: 1fr;
    }
`

export const LatestWorksHeadline = styled.h1`
    grid-column: 1/4;
    justify-self:center;
    align-self: center;
    color:#fff;
    background: #303030;
    font-size: 35px;
    padding: 5px 15px;
    border-radius: 10px;
    text-transform:uppercase;
    z-index:2;

    &:after{
        content: '';
        position: absolute;
        height: 4px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        z-index: -1;
        background: #303030;
        grid-row: 1/2;
    }

    @media screen and (max-width:1000px){
        font-size: 25px;
        grid-column: 1/3;
    }
    @media screen and (max-width:700px){
        font-size: 25px;
        grid-column: 1/2;
    }
    @media screen and (max-width:500px){
        font-size: 20px;
    }
`

export const LastWorksElements = styled.div`
    justify-self: stretch;
    position: relative;
    overflow: hidden;
    cursor:pointer;
    border: 5px solid #fff;
    transition: border .3s;

    &:hover{
        border: 5px solid #76c38f;
    }
    &:hover .latestWorkTitle{
        bottom:-100%;
    }
`