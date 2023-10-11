import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    {
        field: 'quantity',
        headerName: 'Qtd',
    },
    {
        field: 'und',
        headerName: 'Und',
    },
    {
        field: 'description',
        headerName: 'Descrição',
    },
    {
        field: 'unitaryValue',
        headerName: 'Valor unitário',
    },
    {
        field: 'total',
        headerName: 'Valor Total',
    },
]  