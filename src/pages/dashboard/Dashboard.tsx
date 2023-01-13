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

  interface ItemSelectedData {
    sprites: any,
    other: any,
    dream_world: any,
    front_default: any,
    name: any,
    abilities: any,
    ability: any
  }

  const { listItemsp, listOfPokemons, GetListItems, GetListUrl, load } = useContext(ListItemContext);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<ItemSelectedData[]>([]);

  const handleOpen = async (id: any[]) => {
    const itemSelect: any = await listOfPokemons.filter((item: any) => item.id === id)
    setItemSelected(itemSelect)
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  useEffect(() => {
    GetListItems()
  }, [])

  useEffect(() => {
    listItemsp !== undefined && GetListUrl(listItemsp)
  }, [listItemsp])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const nextPage = async () => {
   await GetListItems(listItemsp.data.next);
  }
  const previusPage = () => {
    GetListItems(listItemsp.previous);
  }

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
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          </Menu>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container spacing={2}>
          {
            !load ? listOfPokemons?.map((item: any, index: any) => {
              return (
                <Grid item xs={12} sm={4} md={4} lg={3} key={index}>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      pt: 8,
                      pb: 6,
                    }}
                  >
                    <Container maxWidth="sm">
                      <Card className="card" onClick={() => handleOpen(item.id)}>
                        <CardMedia
                          component="img"
                          height="194"
                          image={item.sprites.other.dream_world.front_default}
                          alt="Paella dish"
                        />
                        <Grid sx={{ display: 'flex', justifyContent: "right" }}>
                          <Grid className='containerbuttonWeight'>
                            <Typography className='buttonWeight' variant="body2" color="text.secondary">{item.weight}</Typography>
                          </Grid>
                        </Grid>
                        <CardContent>
                          <Typography className="nameItem" gutterBottom variant="h4" component="div">
                            {item.name}
                          </Typography>
                          <Typography className="nameItem" variant="body2" color="text.secondary" sx={{ color: 'darkgreen' }}>
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
              <Pagination count={10} onChange={nextPage} />
            </Grid>
          </Grid>
        </Container>
      </main>

      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
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
          <img src={itemSelected.length > 0 && itemSelected[0]?.sprites?.other?.dream_world.front_default} alt="pokemon" />
          <Typography className="nameItem" id="modal-modal-title" variant="h3" component="h2">
            {itemSelected[0]?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Habilities: {itemSelected[0]?.abilities?.map((itm: any) => { return itm.ability.name.replace('-', ' ') })}
          </Typography>
        </Box>
      </Modal>

    </React.Fragment>
  );
};

export default Dashboard;
