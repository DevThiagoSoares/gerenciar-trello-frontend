import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import {
    BoxContainer,
    GridForms,
    paperContainer,
    styleButton,
    subtitleStyle,
    titleStyle,
} from "./style";
import { columns } from "./columns";
import CreateShopModal from "./modal/modalCreate";
import { MaterialList, project } from "./interface";
import { v4 as uuid } from "uuid";
import { TableGrid } from "../../Components/tableGrid";
import { removeInvalidCharacters } from "../../utils/regex";

export function Shopping() {
    const [typeModal, setTypeModal] = useState<{ create: boolean }>({
        create: false,
    });
    const [requester, setRequester] = useState<project>({} as project);
    const [materialList, setMaterialList] = useState<MaterialList>(
        {} as MaterialList
    );
    const [listHistory, setLisHistory] = useState<any[]>([]);
    const [rows, setRows] = useState<any>([]);
    const [arrayList, setArrayList] = useState([]);
    const [amount, setAmount] = useState(null)

    useEffect(() => {
            const total = rows.reduce((accumulator, item) => {
                return accumulator + item.total;
            }, 0);

            setAmount(total)
    }, [rows]);

    const handleOpenModalCreate = () => {
        setTypeModal({ create: true });
        const data = [
            {
                requester: requester,
                materialList: listHistory,
            },
        ];

        setArrayList(data);
    };

    const DeleteItemArray = (id:string) => {
        const newList = rows.filter((item:any)=>{
            if(item.id !== id){
                return item
            }
        })
        setRows(newList)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const arrayList = {
            id: uuid(),
            quantity: materialList.quantity,
            und: materialList.und,
            description: materialList.description,
            unitaryValue: materialList.unitaryValue,
            total: materialList.quantity * materialList.unitaryValue,
            purchaseLink: materialList.purchaseLink,
        };
        setLisHistory([...listHistory, arrayList]);
        setRows([...rows, arrayList]);
        setMaterialList({} as MaterialList);
    };
    const handleCloseModal = () => {
        setTypeModal({ create: false });
    };
    const handleChange = (event: any) => {
        setRequester((state: any) => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    };
    const handleChangeItem = (event: any) => {
        setMaterialList((state: any) => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <Box sx={{ m: 2 }}>
            <Typography sx={titleStyle} gutterBottom>
                Abrir solicitação
            </Typography>
            <Box sx={BoxContainer}>
                <Box
                    sx={{ gap: 2, display: "grid" }}
                    component={"form"}
                    onSubmit={handleSubmit}
                >
                    <Paper sx={paperContainer} elevation={2}>
                        <Typography sx={subtitleStyle}>Dados do Projeto</Typography>
                        <p>
                            Informe seu nome e o projeto para qual deseja solicitar o
                            material.
                        </p>
                        <Box sx={GridForms}>
                            <TextField
                                required
                                id="filled-basic"
                                label="Nome do solicitante"
                                variant="filled"
                                value={requester.requester ?? ""}
                                onInput={(e)=>removeInvalidCharacters(e,'string')}
                                name="requester"
                                onChange={handleChange}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                required
                                id="filled-basic"
                                label="Projeto"
                                name="projectName"
                                onInput={(e)=>removeInvalidCharacters(e,'string')}
                                value={requester.projectName ?? ""}
                                onChange={handleChange}
                                variant="filled"
                            />
                            <TextField
                                required
                                id="filled-basic"
                                label="Centro de custo"
                                name="costCenter"
                                value={requester.costCenter ?? ""}
                                onInput={(e)=>removeInvalidCharacters(e,'string')}
                                onChange={handleChange}
                                variant="filled"
                            />
                            <TextField
                                required
                                id="filled-basic"
                                label="Empresa/Filial"
                                name="subsidiary"
                                value={requester.subsidiary ?? ""}
                                onInput={(e)=>removeInvalidCharacters(e,'string')}
                                onChange={handleChange}
                                variant="filled"
                            />
                            <FormControl fullWidth required>
                                <InputLabel id="demo-simple-select-label">
                                    Prioridade
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={requester.priority ?? ""}
                                    variant="filled"
                                    name="priority"
                                    label="Prioridade"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>Selecionar</em>
                                    </MenuItem>
                                    <MenuItem value={"Urgente"}>Urgente</MenuItem>
                                    <MenuItem value={"Não Urgente"}>Não Urgente</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Paper>
                    <Paper elevation={2} sx={paperContainer}>
                        <Typography sx={subtitleStyle}>Inserir item na lista</Typography>
                        <p>Adicione um item na sua lista de solicitação.</p>
                        <Box sx={BoxContainer}>
                            <TextField
                                required
                                id="filled-basic"
                                label="Quantidade"
                                name="quantity"
                                value={materialList.quantity ?? ""}
                                onInput={(e)=>removeInvalidCharacters(e,'number')}
                                onChange={handleChangeItem}
                                variant="filled"
                            />
                            <TextField
                                required
                                id="filled-basic"
                                label="Unidade"
                                name="und"
                                onInput={(e)=>removeInvalidCharacters(e,'string')}
                                value={materialList.und ?? ""}
                                onChange={handleChangeItem}
                                variant="filled"
                            />
                            <TextField
                                required
                                id="filled-basic"
                                label="Descrição"
                                variant="filled"
                                name="description"
                                onInput={(e)=>removeInvalidCharacters(e,'string')}
                                value={materialList.description ?? ""}
                                onChange={handleChangeItem}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                id="filled-basic"
                                label="Link da compra (opcional)"
                                name="purchaseLink"
                                value={materialList.purchaseLink ?? ""}
                                onChange={handleChangeItem}
                                variant="filled"
                            />
                            <TextField
                                required
                                id="filled-basic"
                                name="unitaryValue"
                                value={materialList.unitaryValue ?? ""}
                                onInput={(e)=>removeInvalidCharacters(e,'number')}
                                onChange={handleChangeItem}
                                label="Valor unitário"
                                variant="filled"
                            />
                        </Box>
                        <Box sx={styleButton}>
                            <Button
                                variant="contained"
                                sx={{ background: "#205171", borderRadius: "20px", mt: 2 }}
                                type="submit"
                            >
                                Inserir
                            </Button>
                        </Box>
                    </Paper>
                </Box>
                <Box>
                    <Paper elevation={2} sx={paperContainer}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>
                                <Typography sx={subtitleStyle}>
                                    Lista de materiais a serem solicitados
                                </Typography>
                                <p>
                                    Lista de materiais inseridos para solicitar sua separação.
                                </p>
                            </Box>
                            <Box
                                sx={{
                                    display: "block",
                                    justifyContent: "end",
                                    textAlign: "end",
                                }}
                            >
                                <Typography sx={subtitleStyle}>Valor Total</Typography>
                                <p style={{ fontSize: "x-large", margin: 0, color: "#767676" }}>
                                    {amount !== null ? amount.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }) : 'R$0,00'}
                                </p>
                            </Box>
                        </Box>
                        <Box>
                            <TableGrid
                                columns={columns}
                                rows={rows}
                                onDelete={DeleteItemArray}
                                setLink={() => { }}
                                titleDelete="Excluir"
                                subtitleDelete="Tem certeza que deseja excluir este item?"
                            />
                        </Box>
                        <Box sx={styleButton}>
                            <Button
                                sx={{
                                    color: "#205171",
                                    borderRadius: "20px",
                                    fontSize: "medium",
                                }}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ background: "#205171", borderRadius: "20px" }}
                                disabled={rows.length === 0 ? true : false}
                                onClick={handleOpenModalCreate}
                            >
                                Solicitar Materiais
                            </Button>
                            {typeModal.create && (
                                <CreateShopModal
                                    arrayList={arrayList}
                                    open={typeModal.create}
                                    handleClose={handleCloseModal}
                                />
                            )}
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}
