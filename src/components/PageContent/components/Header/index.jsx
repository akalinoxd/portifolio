import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

import { Wrapper, Container, Photo, Title, SubTitle, Description, Links } from './style'

const Header = () => {
    return (
        <>
            <Wrapper id='header'>
                <Container>
                    <Photo></Photo>
                    <Title>
                        Olá, eu sou o <span>João</span>
                    </Title>
                    <SubTitle>
                        Desenvolvedor <span>Front-end</span>
                    </SubTitle>
                    <Description>
                        Sou desenvolvedor há 1 ano e minha linguagem de maior domínio é <span>JavaScript</span>, com um foco especial em <span>React</span>. :)
                    </Description>
                    <Links>
                        <a href="https://github.com/akalinoxd" target="_blank"><FaGithubAlt /></a>
                        <a href="https://www.linkedin.com/in/joaovitor-frontend-dev/" target="_blank"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/_miyakira_/" target="_blank"><FaInstagram /></a>
                    </Links>
                </Container>
            </Wrapper>
        </>
    )
}

export default Header