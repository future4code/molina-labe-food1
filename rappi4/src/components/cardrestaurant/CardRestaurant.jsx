
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ButtonCard, DescriptionContainer, TextContainer } from './Styled'
import { useHistory, useParams } from 'react-router-dom';
import { goToLoginPage, goToSignUpPage } from '../../routes/coordinates';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90vw",
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 8,
    height: "20rem",
  },
  media: {
    height: 10,
    width: "90vw",
    paddingTop: '50%'
  },
}));

export default function RecipeReviewCard({ restaurant }) {
  const classes = useStyles();
  const history = useHistory()

  const goToRestaurantsPage = () => {
    history.push(`/restaurante/${restaurant.id}`)
  }

  return (
    <div>
      <Card className={classes.root}>
        <ButtonCard onClick={goToRestaurantsPage} >
          <CardMedia
            className={classes.media}
            image={restaurant && restaurant.logoUrl}
            title={restaurant && restaurant.name}
          />
          <CardContent>
            <TextContainer>
              <Typography variant="body2" color="primary" component="p">
                {restaurant && restaurant.name}
              </Typography>
              <Typography variant="body2" color="secundary" component="p">
                  {restaurant && restaurant.category} 
              </Typography>
            </TextContainer>
            <DescriptionContainer>
              <Typography variant="body2" color="secundary" component="i">
                {restaurant && restaurant.shipping} min
              </Typography>
              <Typography variant="body2" color="secundary" component="i">
                Frete R${restaurant && restaurant.shipping},00
              </Typography>⠀⠀⠀⠀
            </DescriptionContainer>⠀
            <TextContainer>
              <Typography variant="body2" color="secundary" component="i">
                  {restaurant && restaurant.address}
              </Typography>⠀
            </TextContainer>⠀
          </CardContent>
        </ButtonCard>
      </Card >
    </div>
  );
}


