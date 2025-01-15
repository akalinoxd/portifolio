import styled from "styled-components";

export const Wrapper = styled.div`
    color: white;
    display: flex;
    gap: 50px;
    justify-content: center;
`

export const Card = styled.div`
    width: ${props => {
        if(props.hover === "true"){
            return "140px"
        }else if (props.hover === "false"){
            return '120px'
        }
    }};
    height: ${props => {
        if(props.hover === "true"){
            return "110px"
        }else if (props.hover === "false"){
            return '100px'
        }
    }};
    background-color: #323751;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 2px solid #87F1FF;
`

export const Icon = styled.div`
    font-size: ${props => {
        if(props.hover === "true"){
            return "55px"
        }else if (props.hover === "false"){
            return '50px'
        }
    }};
    text-align: center;
`

export const Title = styled.div`
    font-size: ${props => {
        if(props.hover === "true"){
            return "25px"
        }else if (props.hover === "false"){
            return '20px'
        }
    }};
    text-align: center;
    font-family: 'Jua';
`