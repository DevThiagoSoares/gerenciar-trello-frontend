import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styledLegend } from '../style';

interface cardProps {
  title: string,
  subTitle: string,
  route: string,
  imgUrl: string

}

export default function CardTemplate(props: cardProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = React.useState(false);

  function nextPage(page: string) {
    navigate(page)

  }
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Card sx={{ width: 330 }}>
      <CardActionArea onClick={() => nextPage(props.route)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardMedia
          component="img"
          alt="logoicts"
          height="200"
          image={props.imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.subTitle}
          </Typography>
        </CardContent>
        {isHovered && (
          <Box
            sx={styledLegend}
          >
            <Typography variant="h6">Clique na imagem </Typography>
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
}
