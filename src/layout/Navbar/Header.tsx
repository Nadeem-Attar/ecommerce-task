import {
  Box,
  Typography,
  SxProps,
  SelectChangeEvent,
  AppBar,
  Toolbar,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasketOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ArticleIcon from '@mui/icons-material/ArticleOutlined'
import SearchBar from './SearchBar'
import LogoImage from '../../../Public/logo.png'
import ManImage from '../../../Public/man.png'
import MobileNav from './MobileNav'

const HEADER_STYLE: SxProps = {
  display: 'flex',
  backgroundColor: '#fcfcfc',
  // alignItems: 'center',
  justifyContent: 'space-between',
  height: '100px',
  // gap: 7
}

const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)')

  const HEADER_FONTSIZE: SxProps = {
    fontSize: `${isMobile && '8px'}`,
    fontWeight: 'bold',
  }

  const [category, setCategory] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value)
  }

  return (
    <AppBar position="sticky">
      <Toolbar sx={HEADER_STYLE}>
        <Box sx={{ display: 'flex', gap: 5 }} color="#464646">
          <Box
            sx={{ textAlign: 'center', display: { xl: 'block', xs: 'none' } }}
          >
            <ArticleIcon />
            <Typography>طلباتي</Typography>
          </Box>
          <Box
            sx={{ textAlign: 'center', display: { xl: 'block', xs: 'none' } }}
          >
            <FavoriteBorderIcon />
            <Typography>المفضلة</Typography>
          </Box>
          <Box
            sx={{ textAlign: 'center', display: { xl: 'block', xs: 'none' } }}
          >
            <PersonOutlineIcon />
            <Typography>تسجيل الدخول</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <ShoppingBasketIcon />
            <Typography>السلة</Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xl: 'flex', xs: 'none' } }}>
          <SearchBar />
        </Box>

        <Box sx={{ display: 'flex' }}>
          <img src={ManImage} />
          <img src={LogoImage} />
        </Box>

        <Box sx={{ display: { xs: 'block', xl: 'none' } }}>
          <MobileNav />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
