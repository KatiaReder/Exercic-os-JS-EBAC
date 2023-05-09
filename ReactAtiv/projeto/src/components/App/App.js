import './App.css';
import React from 'react';
import { Title, Subtitle, Item, Btn, Bio } from '../Styles/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import foto from '../../images/avatar.jpg'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#CB8A71',
    },
  },
});


function App() {

  const [js, setjs] = React.useState(4);
  const [ty, setty] = React.useState(4);
  const [csharp, setcsharp] = React.useState(5);
  const [py, setpy] = React.useState(3);

  return (
    <div className='main'>
      <div className='principal'>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Katia Andrade" src={foto} sx={{ width: 70, height: 70 }} />
          <Title>Katia Andrade
            <span>Dev Full Stack</span>
            <Bio>Katia Andrade, 19 anos</Bio>
          </Title>
        </Stack>
      </div>
      <div className='itens'>
        <Subtitle>Habilidades</Subtitle>
        <Box sx={{ '& > legend': { mt: 4 }}}>
          <Typography component="legend">Javascript</Typography>
          <Rating
            name="simple-controlled"
            value={js}
            onChange={(event, newValue) => {
              setjs(newValue);
            }}
            readOnly
          />
        </Box>
        <Box sx={{ '& > legend': { mt: 4 }}}>
          <Typography component="legend">Typescript</Typography>
          <Rating
            name="simple-controlled"
            value={ty}
            onChange={(event, newValue) => {
              setty(newValue);
            }}
            readOnly
          />
        </Box>
        <Box sx={{ '& > legend': { mt: 5 }}}>
          <Typography component="legend">C#</Typography>
          <Rating
            name="simple-controlled"
            value={csharp}
            onChange={(event, newValue) => {
              setcsharp(newValue);
            }}
            readOnly
          />
        </Box>
        <Box sx={{ '& > legend': { mt: 3 }}}>
          <Typography component="legend">Python</Typography>
          <Rating
            name="simple-controlled"
            value={py}
            onChange={(event, newValue) => {
              setpy(newValue);
            }}
            readOnly
          />
        </Box>
        <hr></hr>
        <div>
          <Subtitle>Formação</Subtitle>
          <ul>
            <Item>Sistemas de Informação - Cursando</Item>
            <Item>Técnico em Informática para Internet - Finalizado</Item>
          </ul>
        </div>
        <Btn>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <ThemeProvider theme={theme}>
              <Fab size="medium" color="primary" aria-label="LinkedIn">
                <LinkedIn />
              </Fab>
              <Fab size="medium" color="primary" aria-label="Instagram">
                <Instagram />
              </Fab>
              <Fab size="medium" color="primary" aria-label="Facebook">
                <Facebook />
              </Fab>
            </ThemeProvider>
          </Box>
        </Btn>
      </div>
  </div>
  );
}

export default App;
