import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${props => {
        if(props.scroll >= 50){
            return "rgba(30, 30, 36, 0.7)"
        }else{
            return "#1E1E24"
        }
    }};
    width: 100%;
    color: white;
    border-bottom: 1px solid #87F1FF;
    position: fixed;
    backdrop-filter: ${props => {
        if(props.scroll >= 50){
            return "blur(5px)"
        }else{
            return "none"
        }
    }};
    top: 0;
    height: 90px;
`

export const Container = styled.div`
    max-width: 1360px;
    height: 90px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto Flex';
`

export const Logo = styled.a`
    font-size: 35px;
    color: white;
    text-decoration: none;

    & span {
        color: #87F1FF;
    }
`

export const Link = styled.a`
    color: white;
    text-decoration: none;
    font-size: 20px;
    width: 130px;
    margin: 0 20px;

    &:hover{
        color: #C0F5FA;
    }
`