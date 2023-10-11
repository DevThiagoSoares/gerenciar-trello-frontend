import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { BoxContainer, GridForms, paperContainer, styleButton, subtitleStyle, titleStyle } from "./style";
import { TableGrid } from "../../Components/Navbar/tableGrid";
import { columns } from "./columns";
import CreateShopModal from "./modal/modalCreate";
import { MaterialList, project } from "./interface";
import { v4 as uuid } from 'uuid'

export function Shopping() {

    const [typeModal, setTypeModal] = useState<{ create: boolean }>({ create: false })
    const [requester, setRequester] = useState<project>({} as project)
    const [materialList, setMaterialList] = useState<MaterialList>({} as MaterialList)
    const [listHistory, setLisHistory] = useState<any[]>([])
    const [rows, setRows] = useState<any>([])
    const [arrayList, setArrayList] = useState([])

    const handleOpenModalCreate = () => {
        setTypeModal({ create: true })
        const data = [
            {
                requester: requester,
                materialList: listHistory
            }
        ]

        setArrayList(data)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        const arrayList =
        {
            id: uuid(),
            quantity: materialList.quantity,
            und: materialList.und,
            description: materialList.description,
            unitaryValue: (materialList.unitaryValue.toLocaleString('pt-BR', {
                style: 'currency', currency:
                    'BRL'
            })),
            total: (materialList.quantity * materialList.unitaryValue).toLocaleString('pt-BR', {
                style: 'currency', currency:
                    'BRL'
            })
        }
        setLisHistory([...listHistory, arrayList])
        setRows([...rows, arrayList])
        setMaterialList({} as MaterialList)
    }
    const handleCloseModal = () => {
        setTypeModal({ create: false })
        setRequester({} as project)
        setLisHistory([])
        setMaterialList({} as MaterialList)
        setArrayList([])
        setRows([])
    }
    const handleChange = (event: any) => {
        setRequester((state: any) => ({
            ...state,
            [event.target.name]: event.target.value,
        }))
    }
    const handleChangeItem = (event: any) => {
        setMaterialList((state: any) => ({
            ...state,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <Box sx={{ m: 2 }}>
            <Typography sx={titleStyle} gutterBottom>
                Abrir solicitação
            </Typography>
            <Box sx={BoxContainer}>
                <Box sx={{ gap: 2, display: 'grid' }} component={'form'} onSubmit={handleSubmit}>
                    <Paper sx={paperContainer} elevation={2}>
                        <Typography sx={subtitleStyle}>
                            Dados do Projeto
                        </Typography>
                        <p>Informe seu nome e o projeto para qual deseja solicitar o material.</p>
                        <Box sx={GridForms}>
                            <TextField
                                required
                                id="filled-basic"
                                label="Nome do solicitante"
                                variant="filled"
                                value={requester.requester ?? ''}
                                name="requester"
                                onChange={handleChange}
                                sx={{ gridColumn: 'span 2' }} />
                            <TextField
                                required
                                id="filled-basic"
                                label="Projeto"
                                name="projectName"
                                value={requester.projectName ?? ''}
                                onChange={handleChange}
                                variant="filled" />
                            <TextField
                                required
                                id="filled-basic"
                                label="Centro de custo"
                                name="CostCenter"
                                value={requester.CostCenter ?? ''}
                                onChange={handleChange}
                                variant="filled" />
                            <TextField
                                required
                                id="filled-basic"
                                label="Empresa/Filial"
                                name="subsidiary"
                                value={requester.subsidiary ?? ''}
                                onChange={handleChange}
                                variant="filled" />
                            <FormControl fullWidth required>
                                <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={requester.priority ?? ''}
                                    variant="filled"
                                    name="priority"
                                    label="Prioridade"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Selecionar</em>
                                    </MenuItem>
                                    <MenuItem value={'Urgente'}>Urgente</MenuItem>
                                    <MenuItem value={'Não Urgente'}>Não Urgente</MenuItem>
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
                            <TextField
                                required
                                id="filled-basic"
                                label="Quantidade"
                                name="quantity"
                                type="number"
                                value={materialList.quantity ?? ''}
                                onChange={handleChangeItem}
                                variant="filled" />
                            <TextField
                                required
                                id="filled-basic"
                                label="Unidade"
                                name="und"
                                value={materialList.und ?? ''}
                                onChange={handleChangeItem}
                                variant="filled" />
                            <TextField
                                required id="filled-basic"
                                label="Descrição"
                                variant="filled"
                                name="description"
                                value={materialList.description ?? ''}
                                onChange={handleChangeItem}
                                sx={{ gridColumn: 'span 2' }} />
                            <TextField
                                id="filled-basic"
                                label="Link da compra (opcional)"
                                name="purchaseLink"
                                value={materialList.purchaseLink ?? ''}
                                onChange={handleChangeItem}
                                variant="filled" />
                            <TextField
                                required
                                id="filled-basic"
                                name="unitaryValue"
                                value={materialList.unitaryValue ?? ''}
                                type="number"
                                onChange={handleChangeItem}
                                label="Valor unitário"
                                variant="filled" />
                        </Box>
                        <Box sx={styleButton}>
                            <Button variant="contained" sx={{ background: '#205171', borderRadius: '20px', mt: 2 }} type="submit">
                                Inserir
                            </Button>
                        </Box>
                    </Paper>
                </Box>
                <Box>
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
                                rows={rows}
                                skip={0}
                                take={25}
                                onDelete={() => { }}
                                setLink={() => { }}

                            />
                        </Box>
                        <Box sx={styleButton}>
                            <Button sx={{ color: '#205171', borderRadius: '20px', fontSize: 'medium' }}>Cancelar</Button>
                            <Button variant="contained" sx={{ background: '#205171', borderRadius: '20px' }} onClick={handleOpenModalCreate}>Solicitar Materiais</Button>
                            {typeModal.create && <CreateShopModal arrayList={arrayList} open={typeModal.create} handleClose={handleCloseModal} />}
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}