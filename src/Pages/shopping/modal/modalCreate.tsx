import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { styleButton } from '../style';
import { gridForms } from './style';
import { equipeProps, itemListProps } from '../interface';
import { createCard } from '../../../service/shop';

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
    const [equip, setEquipe] = React.useState<equipeProps>({} as equipeProps)

    const handleChange = (event: any) => {
        setEquipe((state: any) => ({
            ...state,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const payload: itemListProps = {
            ...equip,
            project: props.arrayList[0].requester,
            materialList: props.arrayList.map((item: any) => item.materialList)
        }
        createCard(payload).then((res) => {
            console.log(res)
        }).then((error: any) => {
            console.log(error)
        })
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component={'form'} onSubmit={handleSubmit}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Concluir solicitação
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mb: 2 }} variant="subtitle2">
                        Confirme as informações finais de solicitação
                    </Typography>
                    <Box sx={gridForms}>
                        <TextField
                            id="filled-basic"
                            label="Líder do projeto"
                            name='projectLeader'
                            value={equip.projectLeader}
                            onChange={handleChange}
                            variant="filled" />
                        <TextField
                            id="filled-basic"
                            label="Gerente do projeto"
                            name='projectManager'
                            value={equip.projectManager}
                            onChange={handleChange}
                            variant="filled" />
                        <TextField
                            id="filled-basic"
                            label="Gerente técnico"
                            name='projectManager'
                            value={equip.technicalManager}
                            onChange={handleChange}
                            variant="filled" />
                        <TextField
                            id="filled-basic"
                            label="Justificativa"
                            variant="filled"
                            sx={{ gridColumn: 'span 3' }}
                            multiline
                            name='justification'
                            value={equip.justification}
                            onChange={handleChange}
                            rows={3} />
                        <TextField
                            id="filled-basic"
                            label="Email do solicitante"
                            variant="filled"
                            name='email'
                            onChange={handleChange}
                            value={equip.email}
                            sx={{ gridColumn: 'span 3' }} />

                    </Box>
                    <Box sx={styleButton}>
                        <Button sx={{ color: '#205171', borderRadius: '20px' }} onClick={props.handleClose}>Cancelar</Button>
                        <Button sx={{ background: '#205171', borderRadius: '20px' }} variant='contained' type='submit'>Concluir</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
