import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const NavLink = () => {
  const [customerSupport, setCustomerSupport] = React.useState('')

  const handleCustomerSupport = (event: SelectChangeEvent) => {
    setCustomerSupport(event.target.value)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          borderLeft: '1px solid #fff',
          paddingInlineStart: '12px',
        }}
      >
        <Typography sx={{ color: { xl: '#fff', xs: '#333' } }}>
          التصنيفات
        </Typography>
        <MenuIcon sx={{ color: { xl: '#fff', xs: '#333' } }} />
      </Box>
      <Button
        sx={{
          color: { xl: '#fff', xs: '#333' },
          fontSize: '20px',
          minWidth: '150px',
          whiteSpace: 'nowrap',
        }}
      >
        الصفحة الرئيسية
      </Button>
      <Button
        sx={{
          color: { xl: '#fff', xs: '#333' },
          fontSize: '20px',
          minWidth: '130px',
          whiteSpace: 'nowrap',
        }}
      >
        المنتجات والأجهزة
      </Button>
      <Button
        sx={{
          color: { xl: '#fff', xs: '#333' },
          fontSize: '20px',
          minWidth: '130px',
          whiteSpace: 'nowrap',
        }}
      >
        الشراء والشحن
      </Button>
      <Button
        sx={{
          color: { xl: '#fff', xs: '#333' },
          fontSize: '20px',
          minWidth: '130px',
          whiteSpace: 'nowrap',
        }}
      >
        مشاريعنا
      </Button>

      <Select
        sx={{
          color: { xl: '#fff', xs: '#333' },
          svg: {
            color: { xl: '#fff', xs: '#333' },
          },
          width: { xs: '100%', xl: 'auto' },
        }}
        labelId="demo-select-small"
        id="demo-select-small"
        value={customerSupport}
        label="Language"
        onChange={handleCustomerSupport}
        displayEmpty
      >
        <MenuItem value="">
          <em>الدعم الفني</em>
        </MenuItem>
        <MenuItem value={10}>دعم</MenuItem>
      </Select>
    </>
  )
}

export default NavLink
