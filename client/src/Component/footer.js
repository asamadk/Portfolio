import { AppBar,Container,Typography,Toolbar } from "@mui/material"

export default function Footer() {
    return (
      // position:'absolute',
        <AppBar position="static" color="primary" style = { {background:"red" , bottom : '0', marginTop : '50px'} } >
          {/* {make gradient} */}
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit"style={{textAlign : 'center'}}>
                © 2021 Thank You
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}