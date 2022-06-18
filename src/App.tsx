import './App.css'
import Layout from './layout/Layout'
import ImageSection from './Components/ImageSection/ImageSection'
import ProductsSection from './Components/ProductsSection/ProductsList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@mui/material'


const App = () => {
  return (
    <Grid container direction='column'>
      <Layout>
        <ToastContainer />
        <ImageSection />
        <ProductsSection />
      </Layout >
    </Grid >
  )
}

export default App
