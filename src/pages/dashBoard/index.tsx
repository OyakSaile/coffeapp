import { useEffect, useState } from "react";
import {
  FiDollarSign,
  FiHome,
  FiPhone,
  FiSlash,
  FiCheckCircle,
} from "react-icons/fi";

import restaurantImage from "../../assets/dashboardEn.png";
import { SideBar } from "../../components/SideBarMenu";
import { api } from "../../services/api";
import {
  CardDashBoard,
  CheckButtons,
  Container,
  ContentDashBoardArea,
  Icons,
  IconWithText,
} from "./styles";

interface orderProps {
  product: string | undefined;
  id: number | undefined;
  total: number | undefined;
  clientName: string;
  adress: string;
  telephone: string;
}

export function DashBoard() {
  const [order, setOrder] = useState<orderProps[]>([]);
  useEffect(() => {
    api.get("/dashboardOrders").then((response) => {
      // const filtro = response.data.filter((res: any) => res != null);
      console.log(response);
      setOrder(response.data.dashboardOrders);
    });
  }, []);
  return (
    <Container>
      <SideBar />

      {order && (
        <ContentDashBoardArea>
          {order.map(
            ({
              adress,
              id,
              product,
              telephone,
              total,
              clientName,
            }: orderProps) => (
              <CardDashBoard key={id}>
                <p>Pedido #{id}</p>

                <img src={restaurantImage} alt="" />
                <p>Cliente: {clientName}</p>
                <p>Produto: {product}</p>
                <Icons>
                  <IconWithText>
                    <FiPhone />
                    <p>{telephone}</p>
                  </IconWithText>
                  <IconWithText>
                    <FiHome />
                    <p>{adress}</p>
                  </IconWithText>

                  <IconWithText>
                    <FiDollarSign />
                    <p>{total}</p>
                  </IconWithText>
                </Icons>

                <CheckButtons>
                  <button>
                    <FiSlash className="recuseOrder" />
                  </button>

                  <button>
                    <FiCheckCircle className="orderDone" />
                  </button>
                </CheckButtons>
              </CardDashBoard>
            )
          )}
        </ContentDashBoardArea>
      )}
    </Container>
  );
}
