import {
  Box,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import LanguageIcon from '@mui/icons-material/Language'
import { useState } from 'react'
import SearchBar from './SearchBar'
import SearchIcon from '@mui/icons-material/Search'

const Setttings = () => {
  const [language, setLanguage] = useState('')
  const [currency, setCurrency] = useState('')

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value)
  }

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value)
  }

  const [selectedBox, setSelectedBox] = useState(false)
  const SEARCH_BOX: SxProps = {
    color: '#ffffff',
    width: '0%',
    position: 'absolute',
    left: 0,
    right: 0,
    background: '#fff',
    zIndex: 9999,
    padding: '5px 0px',
    overflow: 'hidden',
    transition: 'all .3s',
    '&.active': {
      width: '100%',
    },
  }
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        gap: 4,
        borderRight: { xl: '1px solid #fff' },
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: { xl: 'none' } }}>
        <IconButton onClick={() => setSelectedBox(!selectedBox)}>
          <SearchIcon style={{ color: '#fff' }} />
        </IconButton>
        <Box sx={SEARCH_BOX} className={selectedBox ? 'active' : ''}>
          <Box style={{ width: '90%', margin: 'auto' }}>
            <SearchBar />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            'svg ': {
              color: '#fff',
            },
          }}
        >
          <Select
            sx={{ color: '#ffffff', height: '30px' }}
            labelId="demo-select-small"
            id="demo-select-small"
            value={currency}
            label="Currency"
            onChange={handleChangeCurrency}
            displayEmpty
          >
            <MenuItem value="">
              <em>دولار أمريكي</em>
            </MenuItem>
            <MenuItem value={20}>ليرة سورية</MenuItem>
            <MenuItem value={30}>يورو</MenuItem>
          </Select>
          <SettingsIcon sx={{ color: '#d2ac46' }} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginInlineEnd: '10px',
            'svg ': {
              color: '#fff',
            },
          }}
        >
          <Select
            sx={{ color: '#ffffff', height: '30px' }}
            labelId="demo-select-small"
            id="demo-select-small"
            value={language}
            label="Language"
            onChange={handleChangeLanguage}
            displayEmpty
          >
            <MenuItem value="">
              <em>اللغة</em>
            </MenuItem>
            <MenuItem value={10}>Ar</MenuItem>
            <MenuItem value={20}>En</MenuItem>
            <MenuItem value={30}>Fr</MenuItem>
          </Select>
          <LanguageIcon sx={{ color: '#d2ac46' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default Setttings
