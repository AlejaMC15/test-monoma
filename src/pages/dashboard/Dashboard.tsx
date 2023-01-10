import React, { useContext, useState } from "react";
import {
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Box,
  Toolbar,
  Typography,
  Container,
  Avatar,
  Pagination
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ListItemContext from "../../context/ListItemContext";
import Modal from "@mui/material/Modal";

const Dashboard = () => {

  const { listOfPokemons } = useContext(ListItemContext);

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState();
  const handleOpen = (item: any) => {
    item !== undefined && setInfo(item);
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img style={{ width: "10%" }} src={require('../../assets/images/logo.png')} alt="" />
          <Typography variant="h4" color="inherit" noWrap>
            MONOMA
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Toolbar>
      </AppBar>
      <main>

        {
          listOfPokemons?.map((item: any, index: any) => {
            return (
              <Box
                sx={{
                  bgcolor: "background.paper",
                  pt: 8,
                  pb: 6,
                }}
                key={index}
              >
                <Container maxWidth="sm">
                  <Card sx={{ maxWidth: 345 }} onClick={() => handleOpen(item)}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={item.sprites.other.dream_world.front_default}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.moves.map((move: any, index: any) => {
                          return (<h4 key={index}>{move.move.name}</h4>)
                        })}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                </Container>
              </Box>
            )
          })
        }

        <Container sx={{ py: 8 }} maxWidth="md">

          <Grid container justifyContent="center">
            <Grid item>
              <Pagination count={10} />
            </Grid>
          </Grid>
        </Container>
      </main>

      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          {/* <img src={info && info.sprites.other.dream_world.front_default} alt="pokemon" /> */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* {info?.name} */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

    </React.Fragment>
  );
};

export default Dashboard;
