import { useState } from 'react'

import adBanner from '../../../../../../imgs/banner ad-turbos.png'
import { meusProjetos } from '../meusProjetos'

import { Wrapper, Card, Img, Overlay, Titulo, Descricao, Tecnologias } from "./style"

const Cards = () => {

    const [hover, setHover] = useState()

    const handleHover = (state) => {
        setHover(state)
    }

    return (
        <>
            <Wrapper>
                {meusProjetos.map((elem, index) => {
                    return (
                        <Card onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(undefined)}>
                            <Img src={elem.foto} alt="" />
                            <Overlay hover={hover === index ? "true" : "false"}>
                                <Titulo>{elem.nome}</Titulo>
                                <Descricao>{elem.descricao}</Descricao>
                                <Tecnologias>{elem.tecnologias}</Tecnologias>
                            </Overlay>
                        </Card>
                    )
                })}
            </Wrapper>
        </>
    )
}

export default Cards