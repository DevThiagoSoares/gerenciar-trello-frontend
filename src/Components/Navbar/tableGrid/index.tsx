import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react';
import { table, tableContainer } from './style';

interface TableGridProps {
    rows: any[];
    skip: number;
    take?: number;
    total?: number;
    idAdmin?: string;
    link?: string
    columns: GridColDef[];
    onDelete?: (id: string) => void;
    onEdit?: (id: string) => void;
    onView?: (id: string) => void;
    setLink?: (id: string) => void;
    handleSkip?: (row: number) => void;
    handleTake?: (row: number) => void;

    titleDelete?: string;
    subtitleDelete?: string;
}
export function TableGrid(props: TableGridProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [value, setValue] = useState('');
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        const field = event.currentTarget.dataset.field!;
        const id = event.currentTarget.parentElement!.dataset.id!;
        const row = props.rows.find(r => r.id === id)!;
        setValue(row[field]);
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const actionColumn: GridColDef[] = [
        {
            field: 'menu',
            headerName: ' ',
            type: 'string',
            align: 'right',
            disableColumnMenu: false,
            editable: false,
            renderCell: ({ row }) => (
                <>
                    {props.onDelete && (
                        <>
                            {/*  {userData !== TypeOfUsers.MONITOR ? (
                <ModalDelete
                  adminId={props.idAdmin ?? ''}
                  rowId={row.id}
                  title={props.titleDelete}
                  subtitle={props.subtitleDelete}
                  onDelete={() =>
                    props.onDelete ? props.onDelete(row.id) : ''
                  }></ModalDelete>
              ) : (
                <></>
              )} */}
                        </>
                    )}
                    {props.onEdit && (
                        <IconButton
                            disabled={
                                props.idAdmin !== undefined && row.id === props.idAdmin
                                    ? true
                                    : false
                            }
                            onClick={() => (props.onEdit ? props.onEdit(row.id) : '')}>
                            <EditIcon />
                        </IconButton>
                    )}
                    {props.link && (
                        <>

                            <IconButton
                                sx={{ color: '#B58930' }}
                                onClick={() =>
                                    props.link ? props.setLink(row) : ''
                                }>
                                teste
                                <LockIcon />
                            </IconButton>
                        </>
                    )}
                </>
            ),
        },
    ];

    const handleOnCellClick = (params: GridCellParams) => {
        if (params.field !== 'menu' && props.onView) {
            props.onView(params.id.toString());
        }
    };
    const columns = [...props.columns, actionColumn]
    return (
        <Box sx={tableContainer}>
            <DataGrid
                page={props.skip}
                rows={props.rows}
                pageSize={props.take}
                rowCount={props.total}
                rowsPerPageOptions={[25]}
                onPageSizeChange={newTake => {
                    props.handleTake && props.handleTake(newTake);
                }}
                onCellClick={handleOnCellClick}
                onPageChange={newSkip => {
                    props.handleSkip && props.handleSkip(newSkip);
                }}
                columns={columns.map((column: GridColDef) => ({
                    ...column,
                    flex: 1,
                    sortable: false,
                    headerClassName: 'super-app-theme--header',
                }))}
                sx={table}
                componentsProps={{
                    cell: {
                        onMouseEnter: handlePopoverOpen,
                        onMouseLeave: handlePopoverClose,
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
