export const fetchProductById = async (productId) => {
  const productURL = `https://api.mercadolibre.com/items/${productId}`;
  const descriptionURL = `https://api.mercadolibre.com/items/${productId}/description`;

  const [productResponse, descriptionResponse] = await Promise.all([
    fetch(productURL),
    fetch(descriptionURL)
  ]);

  const productData = await productResponse.json();
  const descriptionData = await descriptionResponse.json();

  // Adicione a descrição ao objeto de dados do produto
  productData.description = descriptionData.plain_text;

  return productData;
};
