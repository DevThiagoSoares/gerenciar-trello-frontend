import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { styleButton } from "../style";
import { gridForms } from "./style";
import { equipeProps, itemListProps } from "../interface";
import { createCard } from "../../../service/shop";
import { removeInvalidCharacters, validateEmail } from "../../../utils/regex";
import { TypeAlert } from "../../../Components/Alert";
import ModalContainer from "../../../Components/Modal/modaContainer";
import LoadingButton from '@mui/lab/LoadingButton';


interface modalProps {
  open: boolean;
  arrayList: any[];
  handleClose: () => void;
  updateList: () => void;
}

export default function CreateShopModal(props: modalProps) {
  const [equip, setEquipe] = React.useState<equipeProps>({} as equipeProps);
  const [loadingButton, setLoadingButton] = React.useState<boolean>(false)

  const handleChange = (event: any) => {
    setEquipe((state: any) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setLoadingButton(true)
    event.preventDefault();
    const payload: itemListProps = {
      ...equip,
      project: props.arrayList[0].requester,
      materialList: props.arrayList[0].materialList,
    };

    try {
      if (validateEmail(equip.email)) {
        await createCard(payload);
        TypeAlert(`Solicitação de compra criada com sucesso`, "success")
        props.handleClose();
        props.updateList()
        setLoadingButton(false)
      }
    } catch (error) {
      TypeAlert(`Ops.. algo deu errado`, `error`)
      setLoadingButton(false)
    }
  };

  return (
    <div>
      <ModalContainer
        fullWidth={true}
        maxWidth="sm"
        open={props.open}
        title="Concluir solicitação"
        subTitle="Confirme as informações finais de solicitação"
      >
        <Box component={"form"} onSubmit={handleSubmit}>
          <Box sx={gridForms}>
            <TextField
              required
              id="filled-basic"
              label="Líder do projeto"
              name="projectLeader"
              value={equip.projectLeader}
              onChange={handleChange}
              onInput={(e) => removeInvalidCharacters(e, 'string')}
              variant="filled"
            />
            <TextField
              required
              id="filled-basic"
              label="Gerente do projeto"
              name="projectManager"
              value={equip.projectManager}
              onChange={handleChange}
              onInput={(e) => removeInvalidCharacters(e, 'string')}
              variant="filled"
            />
            <TextField
              required
              id="filled-basic"
              label="Gerente técnico"
              name="technicalManager"
              value={equip.technicalManager}
              onInput={(e) => removeInvalidCharacters(e, 'string')}
              onChange={handleChange}
              variant="filled"
            />
            <TextField
              id="filled-basic"
              label="Justificativa"
              required
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
              required
              label={
                equip.email ? !validateEmail(equip.email) ?
                  'Email inválido' : 'Email do solicitante' :
                  "Email do solicitante"}
              variant="filled"
              name="email"
              onChange={handleChange}
              value={equip.email}
              sx={{ gridColumn: "span 3" }}
              error={equip.email ? !validateEmail(equip.email) : false}
            />
          </Box>
          <Box sx={styleButton}>
            <Button
              sx={{ color: "#205171", borderRadius: "20px" }}
              onClick={props.handleClose}
            >
              Cancelar
            </Button>
            <LoadingButton
              loading={loadingButton}
              variant="outlined"
              sx={{ background: "#205171", borderRadius: "20px" }}
              disabled={equip.email ? !validateEmail(equip.email) : false}
              type="submit"
            >
              Concluir
            </LoadingButton>
          </Box>
        </Box>
      </ModalContainer>
    </div>
  );
}
