import styled, { keyframes } from "styled-components";

export const Wrapper = styled.footer`
    background-color: #1E1E24;
    color: white;
    border-top: 1px solid #87F1FF;
    padding: 40px 20px;
`

export const Title = styled.h1`
    text-align: center;
    font-family: 'Jua';
    font-size: 48px;
    color: #87F1FF;
`

export const Container = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-family: "Roboto Flex";
`

export const Agradecimento = styled.section`
    width: 45%;
    font-size: 22px;
    text-align: justify;
`

export const FormArea = styled.section`
    width: 45%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const Nome = styled.input`
    height: 30px;
    padding: 10px;
    border: none;
    border-radius: 10px;
`

export const Email = styled.input`
    height: 30px;
    padding: 10px;
    border: none;
    border-radius: 10px;
`

export const Assunto = styled.input`
    grid-column: span 2;
    height: 30px;
    padding: 10px;
    border: none;
    border-radius: 10px;
`

export const Mensagem = styled.textarea`
    grid-column: span 2;
    height: 90px;
    padding: 10px;
    border: none;
    border-radius: 10px;
`

export const SubmitArea = styled.div`
    grid-column: span 2;
    display: flex;
    justify-content: end;
`

const mouseIn = keyframes`
    from{
        background-color: #4a506f;
    }
    to{
        background-color: #282f44;
    }
`

const mouseOut = keyframes`
    from{
        background-color: #282f44;
    }
    to{
        background-color: #4a506f;
    }
`

export const Submit = styled.button`
    width: 150px;
    height: 50px;
    align-items: end;
    font-size: 17px;
    background-color: ${({ hover }) => {
        if (hover === "true") {
            return "#282f44"
        } else if (hover === "false") {
            return "#4a506f"
        } else {
            return "#4a506f"
        }
    }};
    animation-name: ${({hover}) => {
        if(hover === "true"){
            return mouseIn
        }else if(hover === "false"){
            return mouseOut
        }
    }};
    animation-duration: 0.3s;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`