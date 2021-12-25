import React from 'react'
import { Box, Link, List, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
import {Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';


const LinkList = () => {
    const navConfig = ['Home', 'Experience' ,'Education', 'Projects', 'Skills'];
  const theme = useTheme();
  const [highlight , setHighlight] = React.useState('');
  const [open,setOpen] = React.useState(false);

  const changeHighLight = (name) => {
    setHighlight(name);
  }
  const activeRootStyle = {
    color: 'coral',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' }
  };

    return(
    <Box textAlign={"left"}>
                {navConfig.map((item) => (
            <List disablePadding sx={ highlight === item &&  activeRootStyle}>
                <Box sx={{ mb: 2.5, mx: 3.5 }}  >
                  <Box onClick = {()=>changeHighLight(item)} sx={{ ml:1 }} sx={{ color: 'text.primary' }}>
                  
                <Stack
                    alignItems="left"
                    spacing={3}
                    sx={{
                        p: 1,
                        pt: 1,
                        borderRadius: 2,
                        position: 'relative',
                    }}
                >
                    <Link href = {"/"+item.toLowerCase()} style={{ textDecoration : 'none'}}>
                    <Typography variant="subtitle2" style={{color : 'grey'}} >{item} </Typography>
                    </Link>
                </Stack>
                </Box>
                </Box>
            </List>
                ))}
        </Box>
    )
}

export default function NavbarSection({ isOpenSidebar, onCloseSidebar }) {


    const DRAWER_WIDTH = 280;

    const RootStyle = styled('div')(({ theme }) => ({
      [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH
      }
    }));

    const AccountStyle = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, 2.5),
        borderRadius: theme.shape.borderRadiusSm,
        backgroundColor: theme.palette.grey[200]
      }));


      const renderContent = (
        <>
          <Box sx={{ px: 2.5, py: 3 }}>
            <Box
            //  component={RouterLink} to="/"
              sx={{ display: 'inline-flex' }}>
              {/* <Logo /> */}
            </Box>
          </Box>
    
          <Box sx={{ mb: 5, mx: 2.5 }}>
            <Link underline="none" 
            component={RouterLink} to="#"
            >
                
              <AccountStyle style = {{borderRadius : '20px'}}>
                <Avatar src='IMG_2466.jpeg' alt="Samad" style={{backgroundColor : 'coral'}} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                    {'Abdul Samad Kirmani'}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{color : 'grey'}} >
                    {'Web Developer'}
                  </Typography>
                </Box>
              </AccountStyle>
            </Link>
          </Box>
          <LinkList/>
          <Box sx={{ flexGrow: 1 }} />
    
          <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
            <Stack
              alignItems="center"
              spacing={3}
              sx={{
                p: 2.5,
                pt: 5,
                borderRadius: 2,
                position: 'relative',
                bgcolor: 'grey.200'
              }}
            >
    
              <Box sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h6">
                  Contact Me
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +91 7007475550
                </Typography>
              </Box>
    
              <Button
                fullWidth
                href="https://material-ui.com/store/items/minimal-dashboard/"
                target="_blank"
                variant="contained"
                style={{backgroundColor : 'coral', borderRadius : '20px'}}
                >
                  Email Me
              </Button>
            </Stack>
          </Box>
        </>
      );

    return (
        <RootStyle>
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default'
            }
          }}
        >
          {renderContent}
        </Drawer>
    </RootStyle>
    )
}
