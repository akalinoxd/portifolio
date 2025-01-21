import Card from "../Card"

import { linguagens } from "../linguagens"

import { Wrapper } from "./style"

const Cards = () => {

    return (
        <>
            <Wrapper>
                {linguagens.map((elem, index) => {
                    return (
                        <Card obj={elem} />
                    )
                })}
            </Wrapper>
        </>
    )
}

export default Cards