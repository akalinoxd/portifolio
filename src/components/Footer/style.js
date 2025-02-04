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

export const FormArea = styled.section`
    width: 45%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
`

export const ContainerNomeEmail = styled.div`
    width: 40%;
`

export const Label = styled.label`
    display: block;
    margin: 0 0 10px;
`
export const Input = styled.input`
    width: 90%;
    height: 30px;
    padding: 10px;
    border: none;
    background-color: transparent;
    color: white;
    border-bottom: 2px solid white;
`

export const MensagemLabel = styled.label``
export const Mensagem = styled.textarea`
    height: 90px;
    padding: 10px;
    border: none;
    border-radius: 10px;
`

export const SubmitArea = styled.div``

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