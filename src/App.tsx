import './App.css'
import { Divider, Stack, Typography } from '@mui/material'
import { display, height } from '@mui/system'

function App() {
  const desc = document.getElementById("desc")
  if(desc?.textContent?.length > 60){
    desc.textContent = desc.textContent.slice(0,60) + "..."
  }


  return (
    <>
    <Stack display="flex" flexDirection="row" justifyContent="space-between">
      <Stack display="flex" textAlign="start" spacing={1}>
        <Typography variant='h4'>Hamburger</Typography>
        <Typography id="desc" variant='subtitle1' color="gray">Hamburguesa mayo, lechuga, tomate, cebolla morada, porcion de hamburguesa</Typography>
        <Typography variant='subtitle1' fontWeight="bold">$6.000</Typography>
      </Stack>
      <Stack marginLeft={2} textAlign="center" justifyContent="center">
        <img 
          style={{borderRadius:"1rem", 
          border: "1px solid white", 
          boxShadow:"1px", 
          objectFit: "cover",
          display:"block",
          width: "100%",
          height: "100%"
        }}

        src="https://images.rappi.cl/products/2090665309-1590459516881.png?e=webp&d=200x200&q=70"/>
      </Stack>
    </Stack>
    <hr style={{backgroundColor:"black"}}></hr>
    </>
  )
}

export default App
