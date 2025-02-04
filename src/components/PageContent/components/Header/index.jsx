import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

import perfil from '../../../../imgs/foto perfil.jpg'

import { Wrapper, Container, Photo, Title, SubTitle, Links } from './style'

const Header = () => {
    return (
        <>
            <Wrapper id='header'>
                <Container>
                    <Photo src={perfil}></Photo>
                    <Title>
                        Olá, eu sou o <span>João</span>
                    </Title>
                    <SubTitle>
                        Desenvolvedor <span>Full-stack</span>
                    </SubTitle>
                    {/* <Description>
                        Sou desenvolvedor há 1 ano e minha linguagem de maior domínio é <span>JavaScript</span>, com um foco especial em <span>React</span>. :)
                    </Description> */}
                    <Links>
                        <a href="https://github.com/akalinoxd" target="_blank" rel="noreferrer"><FaGithubAlt /></a>
                        <a href="https://www.linkedin.com/in/joaovitor-frontend-dev/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    </Links>
                </Container>
            </Wrapper>
        </>
    )
}

export default Header