import { Grid } from '@mui/material'
import Section01 from './pages/Section01'
import Section02 from './pages/Section02'
import Navbar from './components/Navbar'

function App() {
  return (
    <Grid>
      <Navbar />
      <Section01 />
      <Section02 />
    </Grid>
  )
}

export default App
