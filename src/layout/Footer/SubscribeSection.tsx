import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Divider,
} from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'

const SubscribeSection = () => {
  return (
    <Grid sx={{ width: '100%' }} item lg={4} xs={12}>
      <Box sx={{ margin: '50px', textAlign: 'center' }}>
        <Typography
          sx={{
            color: '#cca43f',
            fontSize: '22px',
            fontWeight: 'bold',
          }}
        >
          سجل للحصول على أخر التحديثات
        </Typography>
        <Divider sx={{ background: '#cca43f' }} />
      </Box>
      <Box mt={6} sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <TextField
          sx={{ background: '#fff', width: '75%' }}
          id="outlined-size-small"
          size="small"
          placeholder="Enter Your Email"
        />
        <Button
          sx={{
            width: '30s%',
            background: '#cca43f',
          }}
          variant="contained"
          startIcon={<TelegramIcon />}
        >
          Subscribe
        </Button>
      </Box>
    </Grid>
  )
}

export default SubscribeSection
