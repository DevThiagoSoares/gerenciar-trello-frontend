export const tableContainer = {
  display: 'flex',
  flex: 1,
  height: "100%",
};

export const table = {
  width: '100%', // 100% da largura da tela
  border: 0,
  '& .super-app-theme--header': {
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    color: 'black', // 'balck' corrigido para 'black'
    padding: '20px',
    height: 'auto', // Altura automática para o cabeçalho
  },
  '& .MuiDataGrid-cell': {
    padding: '1em', // Use unidades flexíveis para o preenchimento
  },
  '& .MuiDataGrid-iconSeparator': {
    color: 'rgba(0, 0, 0, 0.09)',
  },
};
