import { useState, useEffect } from "react"

import { Wrapper, Container, Logo, Link } from "./style"

const Navbar = () => {

    const [scroll, setScroll] = useState()

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <Wrapper scroll={scroll}>
            <Container>
                <Logo href="#header" onClick={handleSmoothScroll}>Port<span href="#header" onClick={handleSmoothScroll}>fólio</span></Logo>
                <nav>
                    <Link href="#projetos" onClick={handleSmoothScroll}>Projetos</Link>
                    <Link href="#habilidades" onClick={handleSmoothScroll}>Habilidades</Link>
                    <Link href="#sobremim" onClick={handleSmoothScroll}>Sobre mim</Link>
                    <Link href="#contato" onClick={handleSmoothScroll}>Contato</Link>
                </nav>
            </Container>
        </Wrapper>
    )
}

export default Navbar