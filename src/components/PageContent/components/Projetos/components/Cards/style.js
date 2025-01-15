import styled from "styled-components";

export const Wrapper = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
`
export const Card = styled.div`
    width: 600px;
    height: 300px;
    border-radius: 5px;
`

export const Img = styled.img`
    position: absolute;
    width: 600px;
    height: 300px;
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #87F1FF;
`

export const Overlay = styled.div`
    position: absolute;
    width: 600px;
    height: 300px;
    background-color: ${({hover}) => {
        if(hover === "true"){
            return "rgba(0, 0, 0, 0.65)"
        }else if(hover === "false"){
            return "none"
        }
    }};
    display: ${({hover}) => {
        if(hover === "true"){
            return "block"
        }else if(hover === "false"){
            return "none"
        }
    }};
    padding: 20px;
    box-sizing: border-box;
    font-family: "Roboto Flex";
`

export const Titulo = styled.h2`
    font-size: 38px;
`

export const Descricao = styled.p`
    font-size: 20px;
`

export const Tecnologias = styled.div`
    font-size: 25px;
`