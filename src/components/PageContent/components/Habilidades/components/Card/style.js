import styled, { keyframes } from "styled-components";

const mouseInCard = keyframes`
    from{
        width: 120px;
        height: 100px;
    }
    to{
        width: 140px;
        height: 110px;
    }
`

const mouseOutCard = keyframes`
    from{
        width: 140px;
        height: 110px;
    }
    to{
        width: 120px;
        height: 100px;
    }
`

export const Wrapper = styled.div`
    width: ${({ hover }) => {
        if (hover === "true") {
            return "140px"
        } else if (hover === "false") {
            return '120px'
        } else {
            return '120px'
        }
    }};
    height: ${({ hover }) => {
        if (hover === "true") {
            return "110px"
        } else if (hover === "false") {
            return '100px'
        } else {
            return '100px'
        }
    }};
    animation-name: ${({hover}) => {
        if(hover === "true"){
            return mouseInCard
        }else if(hover === "false"){
            return mouseOutCard
        }
    }};
    animation-duration: 0.1s;
    background-color: #323751;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 2px solid #87F1FF;
    cursor: pointer;
`

const mouseInIcon = keyframes`
    from{
        font-size: 50px;
    }
    to{
        font-size: 55px;
    }
`

const mouseOutIcon = keyframes`
    from{
        font-size: 55px;
    }
    to{
        font-size: 50px;
    }
`

export const Icon = styled.div`
    font-size: ${({ hover }) => {
        if (hover === "true") {
            return "55px"
        } else if (hover === "false") {
            return '50px'
        } else {
            return '50px'
        }
    }};
    animation-name: ${({hover}) => {
        if(hover === "true"){
            return mouseInIcon
        }else if(hover === "false"){
            return mouseOutIcon
        }
    }};
    animation-duration: 0.1s;
    text-align: center;
`

const mouseInTitle = keyframes`
    from{
        font-size: 20px;
    }
    to{
        font-size: 25px;
    }
`
const mouseOutTitle = keyframes`
    from{
        font-size: 25px;
    }
    to{
        font-size: 20px;
    }
`

export const Title = styled.div`
    font-size: ${({ hover }) => {
        if (hover === "true") {
            return "25px"
        } else if (hover === "false") {
            return '20px'
        } else {
            return '20px'
        }
    }};
    animation-name: ${({hover}) => {
        if(hover === "true"){
            return mouseInTitle
        }else if(hover === "false"){
            return mouseOutTitle
        }
    }};
    animation-duration: 0.1s;
    text-align: center;
    font-family: 'Jua';
`