import { linguagens } from "../linguagens"

import { Wrapper } from "./style"

const Cards = () => {
    return (
        <>
            <Wrapper>
                {linguagens.map((elem, index) => {
                    return (
                        <div key={index}>
                            <div>{elem.icon}</div>
                            <div>{elem.nome}</div>
                        </div>
                    )
                })}
            </Wrapper>
        </>
    )
}

export default Cards