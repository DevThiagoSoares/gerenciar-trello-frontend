import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { BoxContainer, GridForms, paperContainer, styleButton, subtitleStyle, titleStyle } from "./style";
import { TableGrid } from "../../Components/Navbar/tableGrid";
import { columns } from "./columns";
import CreateShopModal from "./modal/modalCreate";

export function Shopping() {

    const [typeModal, setTypeModal] = useState<{ create: boolean }>({ create: false })

    const handleOpenModalCreate = () => {
        setTypeModal({ create: true })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

    const handleCloseModal = () => {
        setTypeModal({ create: false })
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography sx={titleStyle} gutterBottom>
                Abrir solicitação
            </Typography>
            <Box sx={BoxContainer}>
                <Box sx={{ gap: 2, display: 'grid' }} component={'form'}>
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    /* value={age} */
                                    variant="filled"
                                    label="Prioridade"
                                /* onChange={handleChange} */
                                >
                                    <MenuItem value="">
                                        <em>Selecionar</em>
                                    </MenuItem>
                                    <MenuItem value={20}>Urgente</MenuItem>
                                    <MenuItem value={30}>Não Urgente</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                    </Paper>
                    <Paper elevation={2} sx={paperContainer}>
                        <Typography sx={subtitleStyle}>
                            Inserir item na lista
                        </Typography>
                        <p>Adicione um item na sua lista de solicitação.</p>
                        <Box sx={BoxContainer}>
                            <TextField id="filled-basic" label="Quantidade" variant="filled" />
                            <TextField id="filled-basic" label="Unidade" variant="filled" />
                            <TextField id="filled-basic" label="Descrição" variant="filled" sx={{ gridColumn: 'span 2' }} />
                            <TextField id="filled-basic" label="Link da compra (opcional)" variant="filled" />
                            <TextField id="filled-basic" label="Valor unitário" variant="filled" />
                        </Box>
                        <Box sx={styleButton}>
                            <Button variant="contained" sx={{ background: '#205171', borderRadius: '20px', mt: 2 }} type="submit">
                                Inserir
                            </Button>
                        </Box>
                    </Paper>
                </Box>
                <Box onSubmit={handleSubmit}>
                    <Paper elevation={2} sx={paperContainer}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography sx={subtitleStyle}>
                                    Lista de materiais a serem solicitados
                                </Typography>
                                <p>Lista de materiais inseridos para solicitar sua separação.</p>
                            </Box>
                            <Box sx={{ display: 'block', justifyContent: 'end', textAlign: 'end' }}>
                                <Typography sx={subtitleStyle}>
                                    Valor Total
                                </Typography>
                                <p style={{ fontSize: 'x-large', margin: 0, color: '#767676' }}>R$ 200.258,00</p>
                            </Box>
                        </Box>
                        <Box>
                            <TableGrid
                                columns={columns}
                                rows={[]}
                                skip={25}
                            />
                        </Box>
                        <Box sx={styleButton}>
                            <Button sx={{ color: '#205171', borderRadius: '20px', fontSize: 'medium' }}>Cancelar</Button>
                            <Button variant="contained" sx={{ background: '#205171', borderRadius: '20px' }} onClick={handleOpenModalCreate}>Solicitar Materiais</Button>
                            {typeModal.create && <CreateShopModal arrayList={[]} open={typeModal.create} handleClose={handleCloseModal} />}
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}