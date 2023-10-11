import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imageShop from './images/imageShopping.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CardShopping() {
    const navigate = useNavigate();
    
     function nextPage(page:string) {
        navigate(page)
        
    }
    return (
    <Card sx={{ width:330}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={imageShop}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Abrir solicitação
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Faça uma nova solicitação de compra.
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'end'}}>
      <Button variant="outlined" onClick={()=>nextPage('/shopping')}>
        Abrir
      </Button>
      </CardActions>
    </Card>
  );
}
