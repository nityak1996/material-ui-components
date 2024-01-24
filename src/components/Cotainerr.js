import { Container } from "@mui/material"


const Cotainerr = () => {
  return (
    <div>
    <Container sx={{background:"green"}} maxWidth="xs">
    Helllo I am xs
    </Container>    
    <br />
    <Container sx={{background:"green"}} maxWidth="sm">
    Helllo I am sm
    </Container>  
    <br />
    <Container sx={{background:"green"}} maxWidth="md">
    Helllo I am md
    </Container> 
    <br />
    <Container sx={{background:"green"}} maxWidth="lg">
    Helllo I am lg
    </Container>  
    <br />
    <Container sx={{background:"green"}} maxWidth="xl">
    Helllo I am xl
    </Container>
    <br />

    </div>
  )
}

export default Cotainerr