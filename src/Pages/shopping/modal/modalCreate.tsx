import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { BoxContainer, styleButton } from '../style';
import { gridForms } from './style';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #FFF',
    boxShadow: 24,
    p: 4,
};

interface modalProps {
    open: boolean,
    arrayList: any[]
    handleClose: () => void
}

export default function CreateShopModal(props: modalProps) {

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component={'form'}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Concluir solicitação
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mb: 2 }} variant="subtitle2">
                        Confirme as informações finais de solicitação
                    </Typography>
                    <Box sx={gridForms}>
                        <TextField id="filled-basic" label="Líder do projeto" variant="filled" />
                        <TextField id="filled-basic" label="Gerente do projeto" variant="filled" />
                        <TextField id="filled-basic" label="Gerente técnico" variant="filled" />
                        <TextField id="filled-basic" label="Justificativa" variant="filled" sx={{ gridColumn: 'span 3' }} multiline
                            rows={3} />
                        <TextField id="filled-basic" label="Email do solicitante" variant="filled" sx={{ gridColumn: 'span 3' }} />

                    </Box>
                    <Box sx={styleButton}>
                        <Button sx={{ color: '#205171', borderRadius: '20px' }} onClick={props.handleClose}>Cancelar</Button>
                        <Button sx={{ background: '#205171', borderRadius: '20px' }} variant='contained'>Concluir</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
