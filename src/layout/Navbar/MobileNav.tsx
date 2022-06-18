import * as React from 'react'
import { Box, Typography } from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import NavLink from './NavLink'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ArticleIcon from '@mui/icons-material/ArticleOutlined'

type Anchor = 'left' | 'right'

export default function MobileNav() {
  const [state, setState] = React.useState({
    left: false,
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px 0',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <ArticleIcon />
          <Typography>طلباتي</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <FavoriteBorderIcon />
          <Typography>المفضلة</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <PersonOutlineIcon />
          <Typography>تسجيل الدخول</Typography>
        </Box>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <NavLink />
      </Box>
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)} style={{ color: '#333' }}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
      </SwipeableDrawer>
    </div>
  )
}
