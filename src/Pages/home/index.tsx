import { Box } from "@mui/material"
import React from "react"
import CardShopping from "./Cards/CardShop"
import { container } from "./style"

export function Home () {
    return(
        <Box sx={container}>
            <CardShopping/>
        </Box>
    )
}