import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: #282F44;
    height: 900px;
    font-family: 'Roboto Flex';
`

export const Container = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

export const Photo = styled.img`
    background-color: white;
    width: 300px;
    height: 300px;
    border-radius: 300px;
    margin: 0;
    box-shadow: 0px 10px 10px rgb(54, 64, 92);
    border: none;
`

export const Title = styled.h1`
    font-size: 48px;
    margin: 0;

    & span {
        color: #87F1FF;
    }
`

export const SubTitle = styled.h2`
    font-size: 30px;
    margin: 0;

    & span {
        color: #87F1FF;
    }
`

export const Links = styled.div`
    display: flex;
    margin: 0;
    gap: 20px;
    font-size: 30px;

    & a {
        text-decoration: none;
        color: white;
    }
`

export const DownloadButton = styled.a`
    text-decoration: none;
    background-color: ${({hover}) => {
        if(hover === "true"){
            return "rgb(95, 186, 198)"
        }else if(hover === "false"){
            return "#87F1FF"
        }else{
            return "#87F1FF"
        }
    }};
    padding: 15px 20px;
    font-size: 18px;
    border-radius: 50px;
    color: black;
`