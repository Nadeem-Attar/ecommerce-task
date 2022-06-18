import { Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const ContatUs = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Typography sx={{ color: '#ffffff' }}>0942742734723</Typography>
      <PhoneIcon sx={{ color: '#d2ac46' }} />
      <Typography sx={{ color: '#ffffff' }}>info@Golden.ae</Typography>
      <EmailIcon sx={{ color: '#d2ac46' }} />
    </Box>
  )
}

export default ContatUs
