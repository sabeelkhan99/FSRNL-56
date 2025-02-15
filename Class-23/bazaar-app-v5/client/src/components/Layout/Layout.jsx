import React, {Fragment} from 'react'
import Navbar from '../Navbar/Navbar'
import { Box } from '@mui/material'

const Layout = (props) => {
  return (
    <Fragment>
          <header>
              <Navbar/>
          </header>
          <main>
              <Box sx={{marginTop:'3.5rem'}}>
                  {props.children}
                </Box>
          </main>
          <footer>
              
          </footer>
    </Fragment>
  )
}

export default Layout
