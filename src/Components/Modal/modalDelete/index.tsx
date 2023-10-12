import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { colors } from '../../../shared/themes';
import DeleteIcon from '@mui/icons-material/Delete';

interface modalProps {
    onDelete: () => void
    title: string
    subTitle: string
}


export default function ModalDelete(props: modalProps) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOk = () => {
        props.onDelete();
        setOpen(false);
    };


    return (
        <>
            <IconButton
                onClick={() => setOpen(true)}>
                <DeleteIcon color={'primary'} />
            </IconButton>

            <Dialog open={open}>
                <DialogTitle
                    sx={{
                        padding: '2.5rem 2.5rem 0 2.5rem',
                        color: colors.primary_base,
                        fontSize: '1.25rem',
                    }}>
                    {props.title}

                    <Typography
                        sx={{ color: colors.neutral_dark, fontSize: '0.875rem' }}
                        variant="subtitle1">
                        {props.subTitle}
                    </Typography>
                </DialogTitle>
                <DialogContent
                    sx={{
                        width: '600px',
                        padding: '1.0rem',
                    }}></DialogContent>
                <DialogActions sx={{ padding: '0 2.5rem 2.5rem 2.5rem' }}>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleOk} variant="contained">
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>
        </>

    );
}
