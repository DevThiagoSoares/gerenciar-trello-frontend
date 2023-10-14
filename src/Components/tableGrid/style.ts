
export const tableContainer = {
  display: 'flex',
  flex: 1,
  height: 'calc(100vh - 248px)',
};

export const table = {
  width: '100%',
  border: 0,
  '& .super-app-theme--header': {
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    color: 'balck',
    padding: '20px',
    height: '10px',
  },
  '& .MuiDataGrid-cell': {
    padding: '24px',
  },
  '& .MuiDataGrid-iconSeparator': {
    color: 'rgba(0, 0, 0, 0.09)',
  },
};
