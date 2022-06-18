import Constant from "../utils/Constent";

const fetchProducts = async () => {
  const response = await fetch(Constant.url, {
    method: 'get',
    headers: Constant.headers
  })
  return response.json();
}

const removeProductFromWishList = async (id: number) => {
  await fetch(`${Constant.url}/${id}`, {
    method: 'delete',
    headers: Constant.headers
  })
}

const productApi = {
  fetchProducts,
  removeProductFromWishList
}

export default productApi;