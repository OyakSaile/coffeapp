import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container, ContentArea, ButtonsOrderDetailProduct } from "./style";
import { toBrlNumber } from "../../utils/number";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  CreateNewOrderContext,
  CreateNewOrderProvider,
} from "../../contexts/CreateNewOrderModal";

export function ProductDetail() {
  let navigate = useNavigate();
  let params = useParams();

  const { handleOpenModal, productDetail, setProductDetail } = useContext(
    CreateNewOrderContext
  );

  useEffect(() => {
    api.get(`/coffes`).then((response) => {
      const filtro = response.data.find(
        (object: any) => object.id === Number(params.productId)
      );

      setProductDetail(filtro);
    });
  }, []);

  return (
    <>
      <Header />
      {productDetail && (
        <Container>
          <ContentArea>
            <h1>{productDetail.coffeName}</h1>
            <h2>{toBrlNumber(productDetail.price)}</h2>
            <p>{productDetail.coffeDescription}</p>

            <ButtonsOrderDetailProduct>
              <button onClick={handleOpenModal}>Order</button>
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
      )}
    </>
  );
}
