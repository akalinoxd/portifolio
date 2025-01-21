import { useState } from 'react'

import { Wrapper, Img, Overlay, Titulo, Descricao, Tecnologias } from './style'

const Card = (obj) => {

    const [hover, setHover] = useState()

    return (
        <a href={obj.elem.redirect} target='_blank'>
            <Wrapper onMouseEnter={() => setHover("true")} onMouseLeave={() => setHover("false")}>
                <Img src={obj.elem.foto} alt="" />
                <Overlay hover={hover}>
                    <Titulo>{obj.elem.nome}</Titulo>
                    <Descricao>{obj.elem.descricao}</Descricao>
                    <Tecnologias>{obj.elem.tecnologias}</Tecnologias>
                </Overlay>
            </Wrapper>
        </a>
    )
}

export default Card