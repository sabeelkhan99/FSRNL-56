import React, {Fragment} from 'react'
import Navbar from '../Navbar/Navbar'
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';

const Layout = (props) => {
  return (
    <Fragment>
          <header>
              <Navbar />
              <ToastContainer/>
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
