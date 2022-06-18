import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Rating,
  SxProps,
  Typography,
} from '@mui/material'
import { FC, useState } from 'react'
import EyeIcon from '../../../Public/eye.png'
import HeartIcon from '../../../Public/heart.png'
import ClearIcon from '@mui/icons-material/Clear'
import { IProduct } from '../../interfaces/product'
import DeleteIcon from '@mui/icons-material/Delete'

const CARD_STYLES: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  borderRadius: 2.5,
}

const IMAGE_STYLE: SxProps = {
  background: '#fcfcfc',
  textAlign: 'center',
  overflow: 'hidden',
  height: '300px',
  img: {
    height: '300px',
    width: '100%',
    transition: '0.3s',
    objectFit: 'cover',
    cursor: 'pointer',
  },
  '&:hover': {
    img: {
      transform: 'scale(1.2)',
    },
  },
}

const DATA_STYLE: SxProps = {
  padding: '20px',
  // height: '350px',
  background: '#ffffff',
  textAlign: 'center',
}

interface ProductsCardProps {
  product: IProduct
  productWantedToRemove: (id: number) => void
}

const ProductsCard: FC<ProductsCardProps> = ({
  product,
  productWantedToRemove,
}) => {
  const [value] = useState<number>(4)

  const handleProductToRemoveIt = () => {
    productWantedToRemove(product.id)
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <IconButton
        onClick={handleProductToRemoveIt}
        sx={{
          position: 'absolute',
          // width: '100%',
          textAlign: 'end',
          cursor: 'pointer',
          zIndex: 9,
        }}
      >
        <DeleteIcon sx={{ fontSize: '30px' }} />
      </IconButton>
      <Card sx={CARD_STYLES}>
        <Box sx={IMAGE_STYLE}>
          <img src={product.image} />
        </Box>
        <Box sx={DATA_STYLE}>
          <Typography variant="h5" component="p">
            {product.name}
          </Typography>
          <Rating name="read-only" value={value} readOnly />

          <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box>
              <Typography variant="h5" component="p" color="#d2ac46">
                العمق
              </Typography>
              <Typography
                variant="body2"
                component="p"
                fontWeight="normal"
                marginTop="10px"
              >
                {product.depth}
              </Typography>
            </Box>
            <Divider orientation="vertical" variant="fullWidth" flexItem />
            <Box>
              <Typography variant="h5" component="p" color="#d2ac46">
                المنشأ
              </Typography>
              <Typography
                variant="body2"
                component="p"
                fontWeight="normal"
                marginTop="10px"
              >
                {product.origin.name}
              </Typography>
            </Box>
            <Divider orientation="vertical" variant="fullWidth" flexItem />
            <Box>
              <Typography variant="h5" component="p" color="#d2ac46">
                المصنع
              </Typography>
              <Typography
                variant="body2"
                component="p"
                fontWeight="normal"
                marginTop="10px"
              >
                {product.manufacture.name}
              </Typography>
            </Box>
          </Box>

          <Typography mt={3} variant="body1" component="p">
            {product.description}
          </Typography>

          <Typography variant="h5" fontWeight="bold" color="#d2ac46" mt={1}>
            ${product.price}
          </Typography>

          <Box
            sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}
            mt={1}
          >
            <img src={HeartIcon} style={{ width: '30px', height: '30px' }} />
            <Button
              variant="contained"
              sx={{
                background: '#d2ac46',
                fontSize: '15px',
                fontWeight: 'bold',
                width: '40%',
              }}
            >
              إضافة الى السلة
            </Button>
            <img src={EyeIcon} style={{ width: '30px', height: '30px' }} />
          </Box>
        </Box>
      </Card>
    </Grid>
  )
}

export default ProductsCard
