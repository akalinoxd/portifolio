import { useState } from "react"

import { FaInstagram } from "react-icons/fa";

import { Wrapper, Title, Container, Agradecimento, FormArea, Nome, Email, Assunto, Mensagem, SubmitArea, Submit } from "./style"

const Footer = () => {

    const [hover, setHover] = useState()

    // criar função para enviar email

    return (
        <Wrapper id="contato">
            <Title>&lt; Contato /&gt;</Title>
            <Container>
                <Agradecimento>
                    <div>Gostou de algo que viu? Entre em contato! Estou ansioso em saber de que forma posso te ajudar 🫠</div>
                    <div><FaInstagram /></div>
                    <div></div>
                    <div></div>
                </Agradecimento>
                <FormArea>
                    <Nome type="text" placeholder="Insira seu nome" />
                    <Email type="text" placeholder="Insira seu e-mail" />
                    <Assunto type="text" placeholder="Insira o assunto" />
                    <Mensagem name="" id="" placeholder="Insira a sua mensagem"></Mensagem>
                    <SubmitArea>
                        <Submit onMouseEnter={() => setHover("true")} onMouseLeave={() => setHover("false")} hover={hover}>Enviar</Submit>
                    </SubmitArea>
                </FormArea>
            </Container>
        </Wrapper>
    )
}

export default Footer