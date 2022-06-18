import { Box, Grid, Typography } from '@mui/material'
import LogoImg from '../../../Public/5.png'

const WhoWeAreSection = () => {
  return (
    <Grid sx={{ width: '100%' }} item lg={4} xs={12}>
      <Box sx={{ textAlign: 'end', margin: '50px' }}>
        <img src={LogoImg} />
        <Typography
          mt={4}
          sx={{
            color: '#fff',
            fontSize: '22px',
            textAlign: 'end',
            fontWeight: 'bold',
          }}
        >
          الوكيل الحصري لأجهزة كشف الذهب والمعادن شركة جولدن ديتكتور العالمية
          لدينا جميع الأجهزة الأصلية لأفضل الشركات والمياه الجوفيه في الشرق
          الأوسط, كشف الذهب والمعادن مثل شركات ميغا لوكيرتول الألمانية في مجال
          الأجهزة
        </Typography>
      </Box>
    </Grid>
  )
}

export default WhoWeAreSection
