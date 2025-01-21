import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
    width: 600px;
    height: 300px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
`

export const Img = styled.img`
    position: absolute;
    width: 600px;
    height: 300px;
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #87F1FF;
`

const mouseIn = keyframes`
    from {
        background-color: none;
        opacity: 0%;
    }
    to{
        background-color: rgba(0, 0, 0, 0.65);
        opacity: 100%;
    }
`
const mouseOut = keyframes`
    from {
        background-color: rgba(0, 0, 0, 0.65);
        opacity: 100%;
    }
    to{
        background-color: none;
        opacity: 0%;
    }
`


export const Overlay = styled.div`
    position: absolute;
    width: 600px;
    height: 300px;
    animation-name: ${({ hover }) => {
        if (hover === "true") {
            return mouseIn
        } else if (hover === "false") {
            return mouseOut
        } else {
            return "none"
        }
    }};
    animation-duration: 0.5s;
    background-color: ${({ hover }) => {
        if (hover === "true") {
            return "rgba(0, 0, 0, 0.65)"
        } else if (hover === "false") {
            return "rgba(0, 0, 0, 0)"
        } else {
            return "rgba(0, 0, 0, 0)"
        }
    }};
    opacity: ${({ hover }) => {
        if (hover === "true") {
            return "100%"
        } else if (hover === "false") {
            return "0%"
        } else {
            return "0%"
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
    display: flex;
    gap: 10px;
`