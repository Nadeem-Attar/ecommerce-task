import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import productApi from "../../api/productApi";
import { IProduct } from "../../interfaces/product";
import ProductsCard from "./ProductsCard";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { showError, showSuccess } from "../../utils/react.toastify";

const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  const fetchProducts = async () => {
    var response = await productApi.fetchProducts();
    setProducts(response.data.items);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const productWantedToRemove = async (id: number) => {
    try {
      await productApi.removeProductFromWishList(id);
      showSuccess('Remove product Successful');
      fetchProducts();
    } catch (error: any) {
      showError(error.message);
    }
  }

  return (
    <>
      {!products && (
        <Box sx={{ display: 'grid', height: '50vh', placeContent: 'center' }}>
          <ScaleLoader
            color={'#efb82b'}
            loading={true}
            height={35}
            width={4}
            radius={2}
            margin={2} />
        </Box>
      )}
      <Grid container spacing={4} p={3} my={4}>
        {products && products.map((product) => (
          <>
            <ProductsCard
              key={product.id}
              product={product}
              productWantedToRemove={productWantedToRemove}
            />
          </>
        ))}
      </Grid>
    </>

  )
}

export default ProductsList;
