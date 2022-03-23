import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export function ProductDetail() {
  let navigate = useNavigate();
  let params = useParams();
  return (
    <>
      <Header />
      <h1>{params.productId}</h1>
    </>
  );
}
