import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

export default function App() {
  return (
    <>
      <header>
        <div className="user-profile">
          <img src="https://br.web.img3.acsta.net/pictures/19/03/19/17/22/2985063.jpg" alt="Profile Picture" />
          <div className="greetings">
            <p>Hello,</p>
            <h3>Darlene</h3>
          </div>
        </div>
        <div className="cart">
          <HiOutlineBars3BottomRight />
        </div>
      </header>
      <main>
        <section>
          <div className="search-bar">
            <button>
              <FiSearch />
            </button>
            <input type="search" placeholder="Search Products" />
          </div>
        </section>
        <section>
          <div className="products">
            <h2>Find results</h2>
            <div className="products__container">

            <div className="product">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" alt="modelo especial" />
                <h3>Modelo Especial</h3>
                <p>Size: 35.5 cl / 355ml</p>
                <h2>$3.55</h2>
              </div>
              <div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkXldsRFfzUiQVLoEdYgyCgf8vRlVUVfNhEDISrcyusItl99OwZZO7zZJXfj7fDElKKI&usqp=CAU" alt="modelo especial" />
                <h3>Bai Coconut Flavored</h3>
                <p>Size: 10 cl / 250ml</p>
                <h2>$1.23</h2>
              </div>
              <div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqKMIci4cKwyLaS2iCqRwlVAanGjFxv1z8xFhMKVjB_eu8Tz2FhWhBLelrqva7SpXrZ8&usqp=CAU" alt="modelo especial" />
                <h3>NeuroSLEEP Mango</h3>
                <p>Size: 14.5 cl / 430ml</p>
                <h2>$2.35</h2>
              </div>
              <div className="product">
                <img src="https://products3.imgix.drizly.com/ci-surely-non-alcoholic-rose-69ac388c4744752c.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20" alt="modelo especial" />
                <h3>Surely Non Alcoholic</h3>
                <p>Size: 0.5% Al / 1L</p>
                <h2>$5.79</h2>
              </div>
              <div className="product">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" alt="modelo especial" />
                <h3>Modelo Especial</h3>
                <p>Size: 35.5 cl / 355ml</p>
                <h2>$3.55</h2>
              </div>
              <div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkXldsRFfzUiQVLoEdYgyCgf8vRlVUVfNhEDISrcyusItl99OwZZO7zZJXfj7fDElKKI&usqp=CAU" alt="modelo especial" />
                <h3>Bai Coconut Flavored</h3>
                <p>Size: 10 cl / 250ml</p>
                <h2>$1.23</h2>
              </div>
              <div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqKMIci4cKwyLaS2iCqRwlVAanGjFxv1z8xFhMKVjB_eu8Tz2FhWhBLelrqva7SpXrZ8&usqp=CAU" alt="modelo especial" />
                <h3>NeuroSLEEP Mango</h3>
                <p>Size: 14.5 cl / 430ml</p>
                <h2>$2.35</h2>
              </div>
              <div className="product">
                <img src="https://products3.imgix.drizly.com/ci-surely-non-alcoholic-rose-69ac388c4744752c.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20" alt="modelo especial" />
                <h3>Surely Non Alcoholic</h3>
                <p>Size: 0.5% Al / 1L</p>
                <h2>$5.79</h2>
              </div>
              <div className="product">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" alt="modelo especial" />
                <h3>Modelo Especial</h3>
                <p>Size: 35.5 cl / 355ml</p>
                <h2>$3.55</h2>
              </div>
              <div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkXldsRFfzUiQVLoEdYgyCgf8vRlVUVfNhEDISrcyusItl99OwZZO7zZJXfj7fDElKKI&usqp=CAU" alt="modelo especial" />
                <h3>Bai Coconut Flavored</h3>
                <p>Size: 10 cl / 250ml</p>
                <h2>$1.23</h2>
              </div>
              <div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqKMIci4cKwyLaS2iCqRwlVAanGjFxv1z8xFhMKVjB_eu8Tz2FhWhBLelrqva7SpXrZ8&usqp=CAU" alt="modelo especial" />
                <h3>NeuroSLEEP Mango</h3>
                <p>Size: 14.5 cl / 430ml</p>
                <h2>$2.35</h2>
              </div>
              <div className="product">
                <img src="https://products3.imgix.drizly.com/ci-surely-non-alcoholic-rose-69ac388c4744752c.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20" alt="modelo especial" />
                <h3>Surely Non Alcoholic</h3>
                <p>Size: 0.5% Al / 1L</p>
                <h2>$5.79</h2>
              </div>
              <div className="product">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" alt="modelo especial" />
                <h3>Modelo Especial</h3>
                <p>Size: 35.5 cl / 355ml</p>
                <h2>$3.55</h2>
              </div>
              <div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkXldsRFfzUiQVLoEdYgyCgf8vRlVUVfNhEDISrcyusItl99OwZZO7zZJXfj7fDElKKI&usqp=CAU" alt="modelo especial" />
                <h3>Bai Coconut Flavored</h3>
                <p>Size: 10 cl / 250ml</p>
                <h2>$1.23</h2>
              </div>
              <div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqKMIci4cKwyLaS2iCqRwlVAanGjFxv1z8xFhMKVjB_eu8Tz2FhWhBLelrqva7SpXrZ8&usqp=CAU" alt="modelo especial" />
                <h3>NeuroSLEEP Mango</h3>
                <p>Size: 14.5 cl / 430ml</p>
                <h2>$2.35</h2>
              </div>
              <div className="product">
                <img src="https://products3.imgix.drizly.com/ci-surely-non-alcoholic-rose-69ac388c4744752c.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20" alt="modelo especial" />
                <h3>Surely Non Alcoholic</h3>
                <p>Size: 0.5% Al / 1L</p>
                <h2>$5.79</h2>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}