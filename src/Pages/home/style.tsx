export const container = {
    margin: '20px',
    display: 'flex',
    gap: 3
}

export const styledButton = (color: string, background: string) => {
    return {
        background: background,
        color: color,
        borderRadius: "20px",
        fontSize: "small",
    }
}

export const styledLegend = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Define a cor do fundo com 50% de opacidade
    color: 'white',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}