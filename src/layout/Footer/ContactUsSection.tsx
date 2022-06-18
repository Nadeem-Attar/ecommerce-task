import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import FaceBookIcon from '../../../Public/facebook.png'
import InstagramIcon from '../../../Public/instagram.png'
import TwitterIcon from '../../../Public/twitter.png'
import WhatsAppIcon from '../../../Public/whatsapp.png'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'

const ContactUsSection = () => {
  return (
    <Grid sx={{ width: '100%' }} item lg={4} xs={12}>
      <Box sx={{ margin: '50px' }}>
        <Box>
          <Typography
            sx={{
              color: '#cca43f',
              fontSize: '18px',
              textAlign: 'end',
            }}
          >
            تواصل معنا
          </Typography>
          <Divider sx={{ background: '#cca43f' }} />
        </Box>

        <Box mt={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              gap: 2,
              margin: '12px',
            }}
          >
            <Typography sx={{ color: '#fff', fontSize: '18px' }}>
              Syria Aleppo
            </Typography>
            <AddLocationAltIcon sx={{ color: '#cca43f' }} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              gap: 2,
              margin: '12px',
            }}
          >
            <Typography sx={{ color: '#fff', fontSize: '18px' }}>
              0923472374273
            </Typography>
            <PhoneIcon sx={{ color: '#cca43f' }} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              gap: 2,
              margin: '12px',
            }}
          >
            <Typography sx={{ color: '#fff', fontSize: '18px' }}>
              info@Golden.ae
            </Typography>
            <EmailIcon sx={{ color: '#cca43f' }} />
          </Box>
        </Box>

        <Box
          mt={6}
          sx={{
            display: 'flex',
            textAlign: 'center',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          <img width={40} src={TwitterIcon} />
          <img width={40} src={InstagramIcon} />
          <img width={40} src={WhatsAppIcon} />
          <img width={40} src={FaceBookIcon} />
        </Box>
      </Box>
    </Grid>
  )
}

export default ContactUsSection
