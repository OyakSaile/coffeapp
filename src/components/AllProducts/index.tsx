import { useContext } from "react";
import { Link } from "react-router-dom";
import { toBrlNumber } from "../../utils/number";
import { ContainerAllProducts, Products } from "./styles";
import { AllProductsContext } from "../../contexts/AllProductsContext";
export function AllProducts() {
  const coffes = useContext(AllProductsContext);
  return (
    <ContainerAllProducts>
      <Products>
        <h2>All Products</h2>
        <ul>
          {coffes.map(({ coffeImage, coffeName, id, price }) => (
            <li key={id}>
              <div>
                <img src={coffeImage} />
              </div>
              <h2>{toBrlNumber(price)}</h2>

              <h1>{coffeName}</h1>
              <Link to={`/products/${id}`}>
                <button>About</button>
              </Link>
            </li>
          ))}
        </ul>
      </Products>
    </ContainerAllProducts>
  );
}
