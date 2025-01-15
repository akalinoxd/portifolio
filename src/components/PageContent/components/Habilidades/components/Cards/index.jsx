import { useState } from "react"

import { linguagens } from "../linguagens"

import { Wrapper, Card, Icon, Title } from "./style"

const Cards = () => {

    const [mouseIn, setMouseIn] = useState()

    return (
        <>
            <Wrapper>
                {linguagens.map((elem, index) => {
                    return (
                        <Card
                            key={index}
                            onMouseEnter={() => setMouseIn(index)}
                            onMouseLeave={() => setMouseIn(undefined)}
                            hover={mouseIn === index ? "true" : "false"}
                        >
                            <Title hover={mouseIn === index ? "true" : "false"}>{elem.nome}</Title>
                            <Icon hover={mouseIn === index ? "true" : "false"}>{elem.icon}</Icon>
                        </Card>
                    )
                })}
            </Wrapper>
        </>
    )
}

export default Cards