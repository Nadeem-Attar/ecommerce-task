import { Grid } from '@mui/material'
import ContactUsSection from './ContactUsSection'
import SubscribeSection from './SubscribeSection'
import WhoWeAreSection from './WhoWeAreSection'

const sectionStyle = {
  height: '100%',

  backgroundImage: "url('../../../Public/4.png') ",

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Footer = () => {
  return (
    <Grid style={sectionStyle} container direction="row-reverse">
      <WhoWeAreSection />
      <SubscribeSection />
      <ContactUsSection />
    </Grid>
  )
}

export default Footer
