import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Stack } from '@mui/material';
import { Box } from '@mui/system';

import LockIcon from '@mui/icons-material/Lock';
import React from 'react';
import { table, tableContainer } from './style';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ModalDelete from '../Modal/modalDelete';

interface TableGridProps {
    rows: any[];
    link?: string
    columns: GridColDef[];
    onDelete?: (id: string) => void;
    onEdit?: (id: string) => void;
    onView?: (id: string) => void;
    setLink?: (id: string) => void;
    titleDelete?: string
    subtitleDelete?: string
}
export function TableGrid(props: TableGridProps) {

    const actionColumn: GridColDef[] = [
        {
            field: 'menu',
            headerName: '',
            type: 'string',
            align: 'right',
            editable: false,
            renderCell: ({ row }) => (
                <>
                    {props.onDelete && (
                        <>
                            <ModalDelete
                                title={props.titleDelete}
                                subTitle={props.subtitleDelete}
                                onDelete={() =>
                                    props.onDelete ? props.onDelete(row.id) : ''
                                }></ModalDelete>
                        </>
                    )}
                    {props.onEdit && (
                        <IconButton
                            onClick={() => (props.onEdit ? props.onEdit(row.id) : '')}>
                            <EditIcon />
                        </IconButton>
                    )}
                    {props.link && (
                        <IconButton
                            sx={{ color: '#B58930' }}
                            onClick={() =>
                                props.link ? props.setLink(row) : ''
                            }>
                            teste
                            <LockIcon />
                        </IconButton>
                    )}
                </>
            ),
        },
    ];

    const columns = [...props.columns, ...actionColumn]
    console.log(columns)
    return (
        <Box sx={tableContainer}>
            <DataGrid
                rows={props.rows}
                disableColumnMenu
                columns={columns.map((column: GridColDef) => ({
                    ...column,
                    flex: 1,
                    sortable: false,
                    headerClassName: 'super-app-theme--header',
                }))}
                sx={table}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 25 },
                    },
                }}
                components={{
                    NoRowsOverlay: () => (
                        <>
                            <Stack height="100%" alignItems="center" justifyContent="center">
                                Adicione dados para exibir na tabela
                            </Stack>
                        </>
                    ),
                    NoResultsOverlay: () => (
                        <>
                            <Stack height="100%" alignItems="center" justifyContent="center">
                                Adicione dados para exibir na tabela
                            </Stack>
                        </>
                    ),
                }}
            />
        </Box>
    );
}
