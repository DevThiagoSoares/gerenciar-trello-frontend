import { Box } from "@mui/material"
import React from "react"
import { container } from "./style"
import CardTemplate from "./Cards/CardTemplate"
import imageShop from './Cards/images/imageShopping.png'
import imagePerfex from './Cards/images/perfex.png'

export function Home() {
    return (
        <Box sx={container}>
            <CardTemplate
                imgUrl={imageShop}
                route="/shopping"
                title="Abrir solicitação"
                subTitle="Faça uma nova solicitação de compra."
            />
            <CardTemplate
                imgUrl={imagePerfex}
                route="/Perfex"
                title="Horas Trabalhadas"
                subTitle="Adicione horas nos projetos."
            />
        </Box>
    )
}