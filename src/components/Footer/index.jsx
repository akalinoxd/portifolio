import { useState } from "react"

import { Wrapper, Title, Container, FormArea, ContainerNomeEmail, Label, Input, Mensagem, SubmitArea, Submit } from "./style"

const Footer = () => {

    const [hover, setHover] = useState()

    // criar função para enviar email

    return (
        <Wrapper id="contato">
            <Title>&lt; Contato /&gt;</Title>
            <Container>
                <FormArea>
                    <ContainerNomeEmail>
                        <Label>Nome</Label>
                        <Input type="text" placeholder="Insira seu nome" />
                    </ContainerNomeEmail>

                    <ContainerNomeEmail>
                        <Label>Email</Label>
                        <Input type="text" placeholder="Insira seu e-mail" />
                    </ContainerNomeEmail>

                    <Label>Assunto</Label>
                    <Input type="text" placeholder="Insira o assunto" />

                    <Label>Mensagem</Label>
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