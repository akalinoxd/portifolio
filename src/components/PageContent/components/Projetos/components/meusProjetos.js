import { FaHtml5, FaCss3, FaReact, FaWordpress, FaDocker } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

import adBanner from '../../../../../imgs/banner ad-turbos.png'
import imoveis from '../../../../../imgs/imoveis-sa banner.png'
import midway from '../../../../../imgs/midway banner.png'

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
        foto: imoveis,
        redirect: "https://github.com/Will-Maxwell-yc/projeto-imoveis-sa"
    },
    {
        nome: "Midway Creator",
        descricao: "",
        tecnologias: [<FaReact />, <SiJavascript />],
        foto: midway,
        redirect: "https://github.com/Will-Maxwell-yc/site-midway"
    },
]