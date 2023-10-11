import { Autocomplete, Box, Chip, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { BoxContainer, GridForms, paperContainer, subtitleStyle, titleStyle } from "./style";

export function Shopping() {
    return (
        <Box sx={{ m: 2 }}>
            <Typography sx={titleStyle} gutterBottom>
                Abrir solicitação
            </Typography>
            <Box sx={BoxContainer}>
                <Box sx={{ gap: 2, display: 'grid' }}>
                    <Paper sx={paperContainer} elevation={2}>
                        <Typography sx={subtitleStyle}>
                            Dados do Projeto
                        </Typography>
                        <p>Informe seu nome e o projeto para qual deseja solicitar o material.</p>
                        <Box sx={GridForms}>
                            <TextField id="filled-basic" label="Nome do solicitante" variant="filled" sx={{ gridColumn: 'span 2' }} />
                            <TextField id="filled-basic" label="Projeto" variant="filled" />
                            <TextField id="filled-basic" label="Centro de custo" variant="filled" />
                            <TextField id="filled-basic" label="Empresa/Filial" variant="filled" />
                            <Autocomplete
                                multiple
                                id="tags-filled"
                                options={[]}
                                defaultValue={[]}
                                freeSolo
                                renderTags={(value: readonly string[], getTagProps) =>
                                    value.map((option: string, index: number) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="filled"
                                        label="Prioridade"
                                        placeholder="opções"
                                    />
                                )}
                            />
                        </Box>

                    </Paper>
                    <Paper elevation={2} sx={paperContainer}>
                        <Typography sx={subtitleStyle}>
                            Dados do Projeto
                        </Typography>
                        <p>Informe seu nome e o projeto para qual deseja solicitar o materiais.</p>
                        <Box sx={BoxContainer}>
                            <TextField id="filled-basic" label="Quantidade" variant="filled"/>
                            <TextField id="filled-basic" label="Unidade" variant="filled" />
                            <TextField id="filled-basic" label="Descrição" variant="filled" sx={{ gridColumn: 'span 2' }} />
                            <TextField id="filled-basic" label="Link da compra (opcional)" variant="filled" />
                            <TextField id="filled-basic" label="Valor unitário" variant="filled" />
                        </Box>

                    </Paper>
                </Box>
                <Box>
                    <Paper elevation={2} sx={paperContainer}>
                        <Typography sx={subtitleStyle}>
                            Dados do Projeto
                        </Typography>
                        <p>Informe seu nome e o projeto para qual deseja solicitar o materiais.</p>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}