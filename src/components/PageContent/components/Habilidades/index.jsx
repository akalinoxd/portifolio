import Cards from "./components/Cards"

import { Wrapper, Container, Title } from "./style"

const Habilidades = () => {
    return (
        <>
            <Wrapper id="habilidades">
                <Container>
                    <Title>
                        &lt; Habilidades /&gt;
                    </Title>
                    <Cards />
                </Container>
            </Wrapper>
        </>
    )
}

export default Habilidades