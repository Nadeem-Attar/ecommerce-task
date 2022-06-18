import { Divider, Box, SxProps } from '@mui/material'
import Header from './Header'
import MobileNav from './MobileNav'
import NavLink from './NavLink'
import Settings from './Settings'

const NAVBAR_STYLE: SxProps = {
  display: { xl: 'flex', xs: 'none' },
  justifyContent: 'space-around',
  background: '#0a0a0a',
  height: '7vh',
}

const Navbar = () => {
  return (
    <>
      <Box sx={{ display: { xl: 'none', xs: 'block' } }} height="66px">
        <Settings />
      </Box>
      <Header />
      <Divider />
      <Box sx={NAVBAR_STYLE}>
        <Settings />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
          }}
        >
          <NavLink />
        </Box>
      </Box>
    </>
  )
}

export default Navbar
