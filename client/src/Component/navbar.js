import * as React from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import AccountPopover from './AccountPoopover';

// const pages = ['Education', 'Experience', 'Contact', 'Projects', 'Skills'];
const pages = []
const settings = ['Login'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

  const user = localStorage.getItem('userData');
  const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
    }
  }));
  
  const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5)
    }
  }));
  return (
    // <AppBar position="static" style={{background : 'red', minHeight : '50px',marginBottom : '50px'}}>
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <Link to={'/'}>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
    //         style={{color : 'white'}}
    //         >
    //         Home
    //       </Typography>
    //         </Link>

    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Link to = {page}>
    //               <Typography textAlign="center" color="black">{page}</Typography>
    //               </Link>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
    //         style={{color : 'white'}}
    //       >
    //         Home
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    //         {pages.map((page) => (
    //           <Link to = {'/'+page}>
    //           <Button
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: 'white', display: 'block' }}
    //             >
    //             {page}
    //           </Button>
    //             </Link>
    //         ))}
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <PersonOutlineIcon/>
    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: '45px' }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
    //           {settings.map((setting) => (
    //             <MenuItem key={setting} onClick={handleCloseNavMenu}>
    //               <Link to = {"/"+setting.toLowerCase()}>
    //               <Typography textAlign="center">{setting}</Typography>
    //               </Link>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
      <RootStyle>
        <ToolbarStyle>
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            {/* <AccountPopover/> */}
          </Stack>
        </ToolbarStyle>
      </RootStyle>
  );
};
export default Navbar;
