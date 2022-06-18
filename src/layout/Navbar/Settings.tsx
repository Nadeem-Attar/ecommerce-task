import {
  Box,
  Select,
  Typography,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import SettingsIcon from '@mui/icons-material/Settings'
import LanguageIcon from '@mui/icons-material/Language'
import { useState } from 'react'
import ContatUs from './ContatUs'
import Setttings from './Setttings'
import SocialMedia from './SocialMedia'

const Settings = () => {
  const [language, setLanguage] = useState('')
  const [currency, setCurrency] = useState('')

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value)
  }

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value)
  }
  return (
    <Box
      sx={{
        display: { xl: 'flex', xs: 'block' },
        gap: 2,
        padding: '5px 15px',

        alignItems: 'center',
        background: '#000',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: { xl: 'none', xs: 'flex' } }}>
          <SocialMedia />
        </Box>
        <ContatUs />
      </Box>
      <Setttings />
    </Box>
  )
}
export default Settings
