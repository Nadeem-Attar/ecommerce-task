import { Box } from '@mui/material'
import React from 'react'
import FaceBookIcon from '../../../Public/facebook.png'
import InstagramIcon from '../../../Public/instagram.png'
import TwitterIcon from '../../../Public/twitter.png'
import WhatsAppIcon from '../../../Public/whatsapp.png'
const SocialMedia = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'flex' },
        gap: 3,
        width: '100%',
      }}
    >
      <img width={20} src={TwitterIcon} />
      <img width={20} src={InstagramIcon} />
      <img width={20} src={WhatsAppIcon} />
      <img width={20} src={FaceBookIcon} />
    </Box>
  )
}

export default SocialMedia
