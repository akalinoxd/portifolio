import Header from "./components/Header"
import Projetos from "./components/Projetos"
import Habilidades from "./components/Habilidades"

import { Wrapper, Container } from "./style"

const Main = () => {
    return (
        <Wrapper>
            <Container>
                <Header />
                <Projetos />
                <Habilidades />
            </Container>
        </Wrapper>
    )
}

export default Main