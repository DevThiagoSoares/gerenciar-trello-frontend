import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Stack, Tooltip } from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';
import { table, tableContainer } from './style';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import ModalDelete from '../Modal/modalDelete';
import LinkIcon from '@mui/icons-material/Link';

interface TableGridProps {
    rows: any[];
    link?: string
    columns: GridColDef[];
    onDelete?: (id: string) => void;
    onEdit?: (id: string) => void;
    onView?: (id: string) => void;
    setLink?: (link: string) => void;
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
                        {props.setLink && (
                          <a href={row.purchaseLink} target='_blank'>
                           <IconButton>
                           <LinkIcon/>
                           </IconButton>
                          </a>
                        )}
                    {props.onEdit && (
                        <IconButton
                            onClick={() => (props.onEdit ? props.onEdit(row.id) : '')}>
                            <EditIcon />
                        </IconButton>
                    )}
                </>
            ),
        },
    ];

    const columns = [...props.columns, ...actionColumn]
    const updatedColumns = columns.map((column: GridColDef) => {
        if (column.field === "menu") {
          return {
            ...column,
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
                        {props.setLink && (
                          <a href={row.purchaseLink} target='_blank'>
                           <IconButton>
                           <LinkIcon/>
                           </IconButton>
                          </a>
                        )}
                    {props.onEdit && (
                        <IconButton
                            onClick={() => (props.onEdit ? props.onEdit(row.id) : '')}>
                            <EditIcon />
                        </IconButton>
                    )}
                </>
            ),
          };
        }
    
        return {
          ...column,
          flex: 1,
          sortable: false,
          headerClassName: "super-app-theme--header",
          renderCell: (params: GridCellParams) => {
            let formattedValue = params.value;
          
            // Verifica se o campo é "total" ou "unitaryValue" e formata como moeda
            if (column.field === "total" || column.field === "unitaryValue") {
              formattedValue = Number(params.value).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              });
            }
          
            return (
              <span>
                <Tooltip title={`${formattedValue}`}>
                  <span>{`${formattedValue}`}</span>
                </Tooltip>
              </span>
            );
          }
        };
      });
    
    return (
        <Box sx={tableContainer}>
            <DataGrid
                rows={props.rows}
                disableColumnMenu
                columns={updatedColumns.map((column: GridColDef) => ({
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
