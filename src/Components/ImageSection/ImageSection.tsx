import { CardMedia } from "@mui/material";
import MainImage from '../../../Public/3.png';

const ImageSection = () => {
  return (
    <CardMedia
      component="img"
      src={MainImage}
      title="Background Image"
    />
  )
}

export default ImageSection;
