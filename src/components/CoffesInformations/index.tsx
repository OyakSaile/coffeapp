import React, { MouseEvent, useContext, useEffect, useState } from "react";

import arrowLeftImg from "../../assets/arrowleft.svg";
import arrowRightImg from "../../assets/arrowright.svg";
import { CreateNewOrderContext } from "../../contexts/CreateNewOrderModal";
import { api } from "../../services/api";
import { toBrlNumber } from "../../utils/number";
import { ButtonContainer, ImageContainer, Informations } from "./styles";

// const { data, loading, error } = usePalette(IMAGE_URL)

interface CoffesProps {
  coffeDescription: string;
  coffeName: string;
  id: number;
  price: number;
  coffeImage: string;
  estoque: number;
}

export function CoffesInformations() {
  const [coffes, setCoffes] = useState<CoffesProps[]>([]);

  const [indexCoffe, setIndexCoffe] = useState(0);
  const [loadingComponent, setIsLoadingComponent] = useState(true);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    api.get("/featured").then((response) => {
      setCoffes(response.data);

      if (coffes) {
        setIsLoadingComponent(false);
      }
    });
  }, []);

  function handleChangeCoffe(prevOrNextIndex: string) {
    if (indexCoffe + 1 < coffes.length && prevOrNextIndex === "next") {
      console.log(coffes.length);
      console.log(indexCoffe);
      setIndexCoffe(indexCoffe + 1);
    }
    if (indexCoffe > 0 && prevOrNextIndex === "previous") {
      setIndexCoffe(indexCoffe - 1);
    }
  }

  function handleSendData() {
    const numberWhatsappEnterprise = `5521986572835`;
    const { price, coffeName, estoque } = coffes[indexCoffe];
    const user = {
      userName,
      userTelephone,
      userAdress,
    };

    const messageToWhatsapp = `ID do Pedido : ${Math.floor(
      Math.random() * 10
    )}\nOlá, me chamo *${
      user.userName
    }*, fiz um pedido na Loja *coffeAPP*\n\n*Café desejado:* ${coffeName}\n*Quantidade:* ${quantity}\n*Endereço:* ${
      user.userAdress
    }\n*Telefone:* ${user.userTelephone}\n*Total:* ${toBrlNumber(
      price * quantity
    )}\n`;

    console.log(messageToWhatsapp);
    const url = `https://wa.me/${numberWhatsappEnterprise}/?text=${encodeURI(
      messageToWhatsapp
    )}`;

    window.open(url, "_blank");

    handleCloseModal();
  }

  const {
    userAdress,
    userName,
    userTelephone,
    handleCloseModal,
    handleOpenModal,
  } = useContext(CreateNewOrderContext);
  return (
    <>
      {!loadingComponent && (
        <>
          <Informations>
            {/* <div style={{ color: data.lightVibrant }}>
              Text with the vibrant color
            </div> */}

            <p>For You!</p>
            <h1>{coffes[indexCoffe].coffeName}</h1>
            <span>{toBrlNumber(coffes[indexCoffe].price)}</span>
            <p>{coffes[indexCoffe].coffeDescription}</p>
            <ButtonContainer>
              <button className="orderButton" onClick={handleOpenModal}>
                Order
              </button>
              <button>NUTRITION INFORMATION</button>
            </ButtonContainer>
          </Informations>

          <ImageContainer>
            <button
              onClick={() => {
                handleChangeCoffe("previous");
              }}
            >
              <img src={arrowLeftImg} alt="" />
            </button>

            <img
              className="cupImg"
              src={coffes[indexCoffe].coffeImage}
              alt=""
              style={{ maxHeight: "100%", width: "100%", objectFit: "fill" }}
            />

            <button
              onClick={() => {
                handleChangeCoffe("next");
              }}
            >
              <img src={arrowRightImg} alt="" />
            </button>
          </ImageContainer>
        </>
      )}
    </>
  );
}
