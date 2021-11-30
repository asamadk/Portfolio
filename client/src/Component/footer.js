import { AppBar,Container,Typography,Toolbar } from "@mui/material"

export default function Footer() {
    return (
        <AppBar position="static" color="primary" style = { {background:"#353480"} } >
          {/* {make gradient} */}
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit" textAlign="center">
                © 2021 Thank You
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}