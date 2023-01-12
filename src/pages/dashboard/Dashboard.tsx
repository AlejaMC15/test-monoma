import React, { useContext, useState, useEffect } from "react";
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
  Pagination,
  Menu,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ListItemContext from "../../context/ListItemContext";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

import './Dashboard.scss'

const Dashboard = () => {

  const { listItemsp, listOfPokemons, GetListItems, GetListUrl, load } = useContext(ListItemContext);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState();

  const handleOpen = (item: any) => {

    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    GetListItems()
  }, [])

  useEffect(() => {
    listItemsp !== undefined && GetListUrl(listItemsp)
  }, [listItemsp])

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img style={{ width: "10%" }} src={require('../../assets/images/logo.png')} alt="" onClick={() => navigate('/')} />
          <Typography variant="h4" color="inherit" noWrap>
            MONOMA
          </Typography>
          <Grid >
            <Avatar onClick={() => handleClick} sx={{ m: 1, bgcolor: "secondary.main" }} >
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container spacing={2}>
          {
            !load ? listOfPokemons?.map((item: any, index: any) => {
              return (
                <Grid item xs={12} sm={4} md={4} lg={3} >
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
                          component="img"
                          height="194"
                          image={item.sprites.other.dream_world.front_default}
                          alt="Paella dish"
                        />
                        <Grid className='ContainerbuttonWeight'>
                          <Typography className='buttonWeight' variant="body2" color="text.secondary">{item.weight}</Typography>
                        </Grid>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.moves.slice(0, 2).map((move: any) => {
                              return move.move.name.replace('-', ' ')
                            })}
                          </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                      </Card>
                    </Container>
                  </Box>
                </Grid>
              )
            })
              : <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>}
        </Grid>
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
          By Alejandra Meneses Carmona
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
