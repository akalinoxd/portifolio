import { FaHtml5, FaCss3, FaReact, FaWordpress, FaDocker } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

import adBanner from '../../../../../imgs/banner ad-turbos.png'

export const meusProjetos = [
    {
        nome: "AD Turbos",
        descricao: "",
        tecnologias: [<FaWordpress />],
        foto: adBanner,
        redirect: "https://adturbos.com.br/"
    },
    {
        nome: "Imoveis SA",
        descricao: "",
        tecnologias: [<FaReact />, <SiJavascript />, <SiMysql />, <FaDocker />],
        foto: adBanner,
        redirect: "https://github.com/Will-Maxwell-yc/projeto-imoveis-sa"
    },
    {
        nome: "Midway Creator",
        descricao: "",
        tecnologias: [<FaReact />, <SiJavascript />],
        foto: adBanner,
        redirect: "https://github.com/Will-Maxwell-yc/site-midway"
    },
]