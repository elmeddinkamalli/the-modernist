import styled from 'styled-components';

export const SliderContainer = styled.section`
    width:100%;
    height: 100vh;
    background: #290000;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const SliderM = styled.div`
    width: 80%;
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:830px){
        width:90%;
    }
    @media screen and (max-width:700px){
        margin-top:60px;
    }
`
export const Item = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    padding: 0 30px;

    @media screen and (max-width:700px){
        flex-direction: column-reverse;
    }
`
export const SliderLeft = styled.div`
    display:flex;
    flex-direction:column;
    max-width: 350px;
`
export const SliderRight = styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;

    @media screen and (max-width:700px){
        justify-content:center;
    }
`