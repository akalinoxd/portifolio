import { FaHtml5, FaCss3, FaReact, FaWordpress, FaDocker } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

import adBanner from '../../../../../imgs/banner ad-turbos.png'

export const meusProjetos = [
    {
        nome: "AD Turbos",
        descricao: "",
        tecnologias: [<FaWordpress />],
        foto: adBanner
    },
    {
        nome: "Imoveis SA",
        descricao: "",
        tecnologias: [<FaReact />, <SiJavascript />, <SiMysql />, <FaDocker />],
        foto: adBanner
    },
    {
        nome: "Midway Creator",
        descricao: "",
        tecnologias: [<FaReact />, <SiJavascript />],
        foto: adBanner 
    },
]