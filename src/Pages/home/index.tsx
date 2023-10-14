import { Box } from "@mui/material"
import React from "react"
import { container } from "./style"
import CardTemplate from "./Cards/CardTemplate"
import imageShop from './Cards/images/imageShopping.png'

export function Home () {
    return(
        <Box sx={container}>
            <CardTemplate 
                imgUrl={imageShop} 
                route="/shopping" 
                title="Abrir solicitaçao" 
                subTitle="Faça uma nova solicitação de compra."
            />
        </Box>
    )
}