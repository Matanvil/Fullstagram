import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500, zIndex: '-1' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.badgeURL}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizOutlinedIcon />
          </IconButton>
        }
        title={props.fullName}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="500"
        image={props.imgURL}
        alt=""
        sx={{width: '500px'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <SmsOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <SendOutlinedIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            paragraph
          </Typography>
          <Typography paragraph>
            description
          </Typography>
          <Typography paragraph>
           paragraph
          </Typography>
          <Typography>
           paragraph
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
