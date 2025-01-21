import { useState } from "react"

import { Wrapper, Icon, Title } from './style'

const Card = (obj) => {

    const [hover, setHover] = useState()
    return (
        <Wrapper
            onMouseEnter={() => setHover("true")}
            onMouseLeave={() => setHover("false")}
            hover={hover}
        >
            <Title hover={hover}>{obj.obj.nome}</Title>
            <Icon hover={hover}>{obj.obj.icon}</Icon>
        </Wrapper>
    )
}

export default Card