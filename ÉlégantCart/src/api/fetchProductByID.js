export const fetchProductById = async (productId) => {
  const API_URL = `https://api.mercadolibre.com/items/${productId}`

  const response = await fetch(API_URL)
  const data = await response.json()

  return data;
}