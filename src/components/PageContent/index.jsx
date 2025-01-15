import Header from "./components/Header"
import Projetos from "./components/Projetos"

import { Wrapper, Container } from "./style"

const Main = () => {
    return (
        <Wrapper>
            <Container>
                <Header />
                <Projetos />
            </Container>
        </Wrapper>
    )
}

export default Main