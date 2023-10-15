import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { colors } from '../../../shared/themes';

interface modalProps {
    children?: React.ReactNode;
    title:string;
    subTitle:string;
    open: boolean;
    fullWidth:boolean;
    maxWidth:'sm'|'xs'|'md'|'lg'|'xl'
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalContainer(props:modalProps) {

  return (
    <div>
      <Dialog
        fullWidth={props.fullWidth}
        maxWidth={props.maxWidth}
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>{}}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
         sx={{
          padding: '2.5rem 1rem 0 2.5rem',
          color: colors.primary_base,
          fontSize: '1.25rem',
        }}

        >{props.title}
        </DialogTitle>
        <DialogContent sx={{ padding: ' 0.5rem 2.5rem 1.5rem  ' }}>
          <DialogContentText id="alert-dialog-slide-description"
            sx={{ color: colors.neutral_dark, padding:'1rem 0' }}
          >
            {props.subTitle}
          </DialogContentText>
            {props.children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
