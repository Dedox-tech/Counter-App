import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Button } from "@mui/material";
import { Stack } from '@mui/material';
import Image from "./images/waves-image.svg";
import { useState } from 'react';

function App() {

  const imageStyles = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  const [myCount, setMyCount] = useState(0);

  function increaseCount () {
    setMyCount(
      function (previousCount) {
        return previousCount + 1;
      }
    );
  }

  function decreaseCount () {
    setMyCount(
      function (previousCount) {
        return previousCount - 1;
      }
    );
  }

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justifyContent ="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
      style={imageStyles}
    >
      <Grid item>
        <Container style = {{maxWidth: "400px"}}>
          <Card elevation = {5}>
            <CardContent sx = {{p:3}}>
              <Typography variant="h4" color="initial" mb = {2}> React Counter App </Typography>
              <Typography paragraph> This small React App let you manage a basic counter. Feel free to explore the functionality clicking in the buttons below. </Typography>
              <Typography paragraph fontWeight = "fontWeightBold"> Counter: {myCount} </Typography>
              <Stack spacing = {1} direction = "row" justifyContent="flex-end">
                <Button variant = "contained" onClick = {increaseCount}> Increase </Button>
                <Button variant = "outlined"  onClick = {decreaseCount}> Decrease </Button>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
