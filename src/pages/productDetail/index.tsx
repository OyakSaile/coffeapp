import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container, ContentArea, ButtonsOrderDetailProduct } from "./style";
import { toBrlNumber } from "../../utils/number";
import { FaMinus, FaPlus } from "react-icons/fa";
interface productProps {
  coffeDescription: string;
  coffeImage: string;
  coffeName: string;
  price: number;
}
export function ProductDetail() {
  const [productDetail, setProductDetail] = useState<productProps>({
    coffeDescription: "",
    coffeImage: "",
    coffeName: "",
    price: 0,
  });
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    api.get(`/coffes`).then((response) => {
      const filtro = response.data.find(
        (object: any) => object.id === Number(params.productId)
      );

      setProductDetail(filtro);

      setLoading(false);
    });

    console.log(!loading && productDetail);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ContentArea>
          <h1>{productDetail.coffeName}</h1>
          <h2>{toBrlNumber(productDetail.price)}</h2>
          <p>{productDetail.coffeDescription}</p>
          <ButtonsOrderDetailProduct>
            <button>Order</button>
            <button className="quantityButton">
              <FaMinus />
            </button>
            <button className="quantityButton">
              <FaPlus />
            </button>
          </ButtonsOrderDetailProduct>
        </ContentArea>
        <div>
          <img
            src={productDetail.coffeImage}
            alt={productDetail.coffeName}
            title={productDetail.coffeName}
          />
        </div>
      </Container>
    </>
  );
}
