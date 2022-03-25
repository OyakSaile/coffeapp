import { useContext } from "react";
import { Link } from "react-router-dom";

import { AllProductsContext } from "../../contexts/AllProductsContext";
import { toBrlNumber } from "../../utils/number";
import { ContainerAllProducts, Products } from "./styles";

export function AllProducts() {
  const { coffes } = useContext(AllProductsContext);
  return (
    <ContainerAllProducts>
      <Products>
        <h2>All Products</h2>
        <ul>
          {coffes.map(({ coffeImage, coffeName, id, price }) => (
            <li key={id}>
              <div>
                <img src={coffeImage} alt={coffeName} />
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
