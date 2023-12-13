export const fetchProducts = async (query) => {
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`

  const response = await fetch(API_URL)
  const data = await response.json()

  return data.results
}