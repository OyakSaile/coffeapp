import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { toBrlNumber } from "../../utils/number";
import { ContainerAllProducts, Products } from "./styles";

interface CoffesProps {
  coffeDescription: string;
  coffeName: string;
  id: number;
  price: number;
  coffeImage: string;
  estoque: number;
}
export function AllProducts() {
  const [coffes, setCoffes] = useState<CoffesProps[]>([]);
  const [loadingComponent, setIsLoadingComponent] = useState(true);

  useEffect(() => {
    api.get("/coffes").then((response) => {
      setCoffes(response.data);

      if (coffes) {
        setIsLoadingComponent(false);
      }
    });
  }, []);
  return (
    <ContainerAllProducts>
      {!loadingComponent && (
        <Products>
          <h2>All Products</h2>
          <ul>
            {coffes.map(({ coffeImage, coffeName, id, price }: CoffesProps) => (
              <li key={id}>
                <div>
                  <img src={coffeImage} />
                </div>
                <h2>{toBrlNumber(price)}</h2>

                <h1>{coffeName}</h1>
                <Link to={`/products/${coffeName}`}>
                  <button>About</button>
                </Link>
              </li>
            ))}
          </ul>
        </Products>
      )}
    </ContainerAllProducts>
  );
}
