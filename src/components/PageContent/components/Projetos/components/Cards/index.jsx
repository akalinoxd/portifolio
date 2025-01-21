import Card from '../Card'

import { meusProjetos } from '../meusProjetos'

import { Wrapper } from "./style"

const Cards = () => {

    return (
        <>
            <Wrapper>
                {meusProjetos.map((elem, index) => {
                    return (
                        <Card elem={elem} />
                    )
                })}
            </Wrapper>
        </>
    )
}

export default Cards