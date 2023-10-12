import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { styleButton } from "../style";
import { gridForms } from "./style";
import { equipeProps, itemListProps } from "../interface";
import { createCard } from "../../../service/shop";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #FFF",
  boxShadow: 24,
  p: 4,
};

interface modalProps {
  open: boolean;
  arrayList: any[];
  handleClose: () => void;
}

export default function CreateShopModal(props: modalProps) {
  const [equip, setEquipe] = React.useState<equipeProps>({} as equipeProps);

  const handleChange = (event: any) => {
    setEquipe((state: any) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload: itemListProps = {
      ...equip,
      project: props.arrayList[0].requester,
      materialList: props.arrayList[0].materialList,
    };

    try {
      await createCard(payload);
      Swal.fire({
        icon: "success",
        title: "Card criado com sucesso",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
      });
      props.handleClose();
    } catch (error) {
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component={"form"} onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Concluir solicitação
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mb: 2 }}
            variant="subtitle2"
          >
            Confirme as informações finais de solicitação
          </Typography>
          <Box sx={gridForms}>
            <TextField
              id="filled-basic"
              label="Líder do projeto"
              name="projectLeader"
              value={equip.projectLeader}
              onChange={handleChange}
              variant="filled"
            />
            <TextField
              id="filled-basic"
              label="Gerente do projeto"
              name="projectManager"
              value={equip.projectManager}
              onChange={handleChange}
              variant="filled"
            />
            <TextField
              id="filled-basic"
              label="Gerente técnico"
              name="technicalManager"
              value={equip.technicalManager}
              onChange={handleChange}
              variant="filled"
            />
            <TextField
              id="filled-basic"
              label="Justificativa"
              variant="filled"
              sx={{ gridColumn: "span 3" }}
              multiline
              name="justification"
              value={equip.justification}
              onChange={handleChange}
              rows={3}
            />
            <TextField
              id="filled-basic"
              label="Email do solicitante"
              variant="filled"
              name="email"
              onChange={handleChange}
              value={equip.email}
              sx={{ gridColumn: "span 3" }}
            />
          </Box>
          <Box sx={styleButton}>
            <Button
              sx={{ color: "#205171", borderRadius: "20px" }}
              onClick={props.handleClose}
            >
              Cancelar
            </Button>
            <Button
              sx={{ background: "#205171", borderRadius: "20px" }}
              variant="contained"
              type="submit"
            >
              Concluir
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
