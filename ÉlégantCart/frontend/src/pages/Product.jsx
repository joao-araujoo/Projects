import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../api/fetchProductByID";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoIosArrowRoundBack } from "react-icons/io";
import useCart from "../hooks/useCart";
import "../product.css";

export default function Product() {
  const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(0);
  const { productId } = useParams();
  const { addToCart } = useCart();

  const conditions = {
    new: "Novo",
    used: "Usado",
    refurbished: "Recondicionado"
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProductById(productId);
      setProduct(response);
      document.title = response.title ? response.title : "ÉlégantCart";
    }
    
    fetchData();
  }, [productId]);
  
  const handleAddToCart = (productId)  => {
    if (productQuantity > 0) {
      addToCart(productId, productQuantity);
      alert("Adicionado ao carrinho com sucesso!")
      setProductQuantity(0);
    }
  }

  return (
    <>
      <header>
        <Link to="/">
          <button className="back-button">
            <IoIosArrowRoundBack className="arrow-left" /> Back
          </button>
        </Link>
        <button>
          <HiOutlineBars3BottomRight />
        </button>
      </header>

      <main>
        <section>
          <div className="product-section">
            <div className="container__image">
              <img
                src={
                  product.thumbnail &&
                  product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")
                }
                alt={product.title}
              />
            </div>
            <div className="container__product">
              <div className="product-characteristics">
                <h2>{product.title}</h2>
                <div>
                  <p>
                    {product.attributes && product.attributes.length > 0
                      ? product.attributes.find((att) => att.id === "BRAND")
                        ? product.attributes.find((att) => att.id === "BRAND")
                            .value_name
                        : "N/A"
                      : "N/A"}
                  </p>
                  <p>{conditions[product.condition]}</p>
                </div>
              </div>
              <hr />
              <div className="description">
                <h3>Product Description</h3>
                <p>
                  {product.description
                    ? product.description
                    : "Oops... Ainda não há uma descrição para este produto."}
                </p>
              </div>
              <div className="container__add-cart">
                <h2>
                  {product.price &&
                    product.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: product.currency_id,
                    })}
                </h2>
                <div className="add-cart__buttons">
                  <div className="product-quantity">
                    <button
                      onClick={() =>
                        setProductQuantity((currentState) =>
                          currentState > 0 ? currentState - 1 : 0
                        )
                      }
                    >
                      -
                    </button>
                    <span>{productQuantity}</span>
                    <button
                      onClick={() =>
                        setProductQuantity((currentState) => currentState + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="addToCart-button"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
