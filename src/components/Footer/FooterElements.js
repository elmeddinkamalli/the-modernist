import styled from 'styled-components';

export const FooterMainContainer = styled.section`
    background-color: #303030;
    width:100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const FooterWrapper = styled.div`
    width:80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap:20px;
    padding: 40px 0;

    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 60px;
    }
    @media screen and (max-width:600px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(auto-fill, 220px);
        grid-gap: 40px;
    }
`

export const FooterElement = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;

    @media screen and (max-width:600px){
        &:nth-child(2),
        &:nth-child(4){
            padding-top: 20px;
            border-top: 1px solid #444444;
        }
    }
`

export const contactUsFrom = styled.form`
    display:flex;
    justify-content:flex-start;
`

export const FooterCopyright = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    padding: 16px 0;
    border-top: 1px solid #000;
`