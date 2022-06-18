import {
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  TextField,
  Button,
} from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  const [category, setCategory] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value)
  }
  return (
    <Box display="flex">
      <Button
        fullWidth
        variant="contained"
        endIcon={<SearchIcon fontSize="large" />}
        size="small"
        sx={{
          fontSize: '20px',
          fontWeight: 'bold',
          background:
            'linear-gradient(90deg, #ad7a17, #edd66e, #ad7a17, #edd66e)',
          width: { xl: '100px', xs: '50px' },
        }}
      >
        بحث
      </Button>

      <TextField
        label="الحجم"
        size="small"
        sx={{ width: { xl: '500px', xs: 'calc(100% - 150px)' } }}
      />
      <FormControl sx={{ width: { xl: '150px', xs: '100px' } }} size="small">
        <Select
          labelId="demo-select-small"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SearchBar
