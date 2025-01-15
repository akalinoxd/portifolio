import Cards from "./components/Cards"

import { Wrapper, Container, Title } from "./style"

const Projetos = () => {
    return (
        <>
            <Wrapper id="projetos">
                <Container>
                    <Title>
                        &lt; Projetos /&gt;
                    </Title>
                    <Cards />
                </Container>
            </Wrapper>
        </>
    )
}

export default Projetos